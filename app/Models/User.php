<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes , HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'user_type',
        'birthdate',
        'gender',
        'status',
        'category_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function profile()
    {
        if ($this->user_type == 'Doctor')
            return $this->doctorProfile();
        elseif ($this->user_type == 'Patient')
            return $this->patientProfile();
    }
    public function doctorProfile(): HasOne
    {
        return $this->hasOne(DoctorProfile::class);
    }

    public function patientProfile(): HasOne
    {
        return $this->hasOne(PatientProfile::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'Active');
    }

    public function scopeDoctor($query)
    {
        return $query->where('user_type', 'Doctor');
    }

    public function scopePatient($query)
    {
        return $query->where('user_type', 'Patient');
    }
    public function channels()
    {
        return $this->hasMany(communication_channel::class,'user_id');
    }
    public function favourites()
    {
        return $this->hasMany(favourites::class,'patient_id');
    }
    public function communications()
    {
        return $this->hasMany(doctor_communication::class,'doctor_id');
    }
    public function patientRequests()
    {
        return $this->hasMany(DoctorPatientRequest::class,'doctor_id');
    }
    public function trainingRequests()
    {
        return $this->hasMany(trainingRequest::class,'trainer_id');
    }
    public function traineeRequests()
    {
        return $this->hasMany(trainingRequest::class,'trainee_id');
    }
    public function interests()
    {
        return $this->hasMany(interest::class,'user_id');
    }

    public function hasRequestTo($trainer_id , $status ='')
    {
        $count =  $this->traineeRequests->where('trainer_id' , $trainer_id );
        if($status)
        {
            if(is_array($status))
            {
                $count = $count->whereIn('status' , $status);
            }
            else
            {
                $count = $count->where('status' , $status);
            }
        }
        return $count->count();
    }
}
