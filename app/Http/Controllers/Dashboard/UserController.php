<?php

    namespace App\Http\Controllers\Dashboard;

    use App\Http\Controllers\Controller;
    use App\Models\Subscription;
    use App\Models\SubscriptionUserVisit;
    use App\Models\User;
    use App\Models\UserSubscriptionVisit;
    use Exception;
    use Illuminate\Contracts\Foundation\Application;
    use Illuminate\Contracts\View\Factory;
    use Illuminate\Contracts\View\View;
    use Illuminate\Http\JsonResponse;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;
    use Illuminate\Support\Facades\Validator;

    class UserController extends Controller
    {

        public function index()
        {
            $activeUsers = User::where([['status','Active'],['user_type','!=','patient']])->paginate(15);
            return view('dashboard.users.index',compact('activeUsers'));
        }
        public function index_patient()
        {
            $activeUsers = User::where([['status','Active'],['user_type','patient']])->paginate(15);
            return view('dashboard.patient.index',compact('activeUsers'));
        }

        public function nonActive(){
            $nonActiveUsers = User::where([['status','Wating for admin confirm'],['user_type','!=','patient']])->paginate(15);
            return view('dashboard.users.non-active',compact('nonActiveUsers'));
        }
        public function nonActive_patient(){
            $nonActiveUsers = User::where([['status','Wating for admin confirm'],['user_type','patient']])->paginate(15);
            return view('dashboard.patient.non-active',compact('nonActiveUsers'));
        }

        public function blocked(){
            $blockedUsers = User::where([['status','Blocked'],['user_type','!=','patient']])->paginate(15);
            return view('dashboard.users.blocked',compact('blockedUsers'));
        }
        public function blocked_patient(){
            $blockedUsers = User::where([['status','Blocked'],['user_type','patient']])->paginate(15);
            return view('dashboard.patient.blocked',compact('blockedUsers'));
        }


        /**
         * Display the specified resource.
         *
         * @param UserSubscriptionVisit $userSubscriptionVisit
         *
         * @return Application|Factory|View
         */
        public function show( $user)
        {
            $user=User::find($user);
            return view('dashboard.users.show',compact('user'));
        }
        public function show_patient( $user)
        {
            $user=User::find($user);
            return view('dashboard.patient.show',compact('user'));
        }



        /**
         * Show the form for editing the specified resource.
         *
         * @param UserSubscriptionVisit $userSubscriptionVisit
         *
         * @return Response
         */
        public function edit(UserSubscriptionVisit $userSubscriptionVisit)
        {
            //
        }

        /**
         * Update the specified resource in storage.
         *
         * @param $data
         *
         * @return false|JsonResponse
         */
        protected function userMakeRequestValidator($data)
        {
            $validator=Validator::make($data, [
                'token'=>'required',
                'email'=>'required|email',
                'password'=>'required|min:6',
            ]);
            if ($validator->fails()) {
                return $this->returnJsonResponse($validator->errors()->first(),
                    [], FALSE, 212);
            }
            return FALSE;
            //
        }

        /**
         * Remove the specified resource from storage.
         *
         * @param UserSubscriptionVisit $userSubscriptionVisit
         *
         * @return Response
         */
        public function destroy(UserSubscriptionVisit $userSubscriptionVisit)
        {

        }
        public function changeStatus( $user)
        {

            try {
                $user=User::find($user);
                $status=$user->status == 'Active' ? 'Wating for admin confirm' : 'Active';
                $user->update(['status'=>$status]);
                notify()->success(__('dashboard/user.status_changed'));
                return redirect()->route('dashboard.users.index')->with(['success'=>__('dashboard/user.status_changed')]);


            } catch (Exception $e) {
                notify()->error(__('global.try_again'));
                return redirect()->route('dashboard.users.index')->with(['error'=>__('global.try_again')]);
            }
        }

        public function statusBlock($user)
        {
            try {
                $user=User::find($user);
                $status=$user->status == 'Active' ? 'Blocked' : 'Active';

                $user->update(['status'=>$status]);

                notify()->success(__('dashboard/user.status_changed'));
                return redirect()->route('dashboard.users.index')->with(['success'=>__('dashboard/user.status_changed')]);


            } catch (Exception $e) {
                notify()->error(__('global.try_again'));
                return redirect()->route('dashboard.users.index')->with(['error'=>__('global.try_again')]);
            }
        }



    }
