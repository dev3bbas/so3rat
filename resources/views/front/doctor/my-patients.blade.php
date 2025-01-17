@extends('layouts.app')
@section('style')
    <style>
        /*.d-flex{*/
        /*    display: flex!important;*/
        /*    flex-direction: column;*/
        /*    align-items: flex-start;*/
        /*}*/
    </style>
@endsection
@section('content')


    <!-- Breadcrumb -->
        <div class="breadcrumb-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-12 col-12">
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="{{route('home')}}">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">المرضي</li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title float-right pr-5">المرضي</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Breadcrumb -->

        <!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                        <!-- Profile Sidebar -->
                        @include('front.includes.profile_sidebar')
                        <!-- /Profile Sidebar -->

                    </div>
                    <div class="col-md-7 col-lg-8 col-xl-9">

                        <div class="row row-grid">
                            <div class="col-md-6 col-lg-4 col-xl-3">
                                @foreach ($requests as $item)


                                <div class="card widget-profile pat-widget-profile">
                                    <div class="card-body">

                                        <div class="pro-widget-content">
                                            <div class="profile-info-widget">
                                                <a href="{{route('patient-profile',[$item->patient->id])}}" class="booking-doc-img ">
                                                    <img src="{{asset($item->patient->photo)}}" alt="User Image">
                                                </a>
                                                <div class="profile-det-info">
                                                    <h3><a href="{{route('patient-profile',[$item->patient->id])}}" style="color: #007bff">{{$item->patient->name}}</a></h3>

                                                    <div class="patient-details">
                                                        <h5><b>الرقم:</b> {{$item->patient->id}}</h5>
                                                        {{-- <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> العاشر , {{$item->patient->patientProfile->}}</h5> --}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="patient-info d-flex">
                                            <ul>
                                                <div>
                                                    <li class="float-right">
                                                        <span> {{__('front/patient.phone')}} : </span>
                                                        <span>{{$item->patient->phone}}</span>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="float-right">
                                                        <span>{{__('front/patient.age')}} :</span>
                                                        <span>{{date_diff(new \DateTime($item->patient->birthdate), new \DateTime())->format("%y Years")}},</span>

                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="float-right">
                                                        <span>{{__('front/patient.gender')}} :</span>
                                                        <span>{{$item->patient->gender}}</span>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="float-right">
                                                        <span>{{__('front/patient.Blood_type')}} :</span>
                                                        <span>AB+</span>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
        <!-- /Page Content -->


@endsection
