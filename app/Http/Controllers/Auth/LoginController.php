<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    /**
     * The user has been authenticated.
     *
     * @param Request $request
     * @param  mixed  $user
     * @return RedirectResponse|JsonResponse|void
     */
    protected function authenticated(Request $request, $user)
    {
        if (!$user->profile || @$user->profile->completePercentage < 70 )
        {
            return $user->user_type == 'Patient' ? redirect()->route('complete_patient_profile', $user->id) : redirect()->route('complete_doctor_profile', $user->id);
        }
        else if ($user->status == 'Wating for admin confirm')
        {
            $msg = $user->status;
            $this->guard()->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return $request->wantsJson()
                ? new JsonResponse([], 204)
                : redirect()->back()->with(['error' => $msg]);
        }
    }
}
