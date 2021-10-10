@extends('layouts.app')
@section('content')
    @include('front.includes.header')

        <!-- Breadcrumb -->
        <div class="breadcrumb-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-12 col-12">
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="home.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Payment</li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title">Payment</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Breadcrumb -->

        <!-- Page Content -->
        <div class="content success-page-cont">
            <div class="container-fluid">

                <div class="row justify-content-center">
                    <div class="col-lg-6">

                        <!-- Success Card -->
                        <div class="card success-card">
                            <div class="card-body">
                                <div class="success-cont">
                                    <i class="fas fa-check"></i>
                                    <h3>Payment Successfully!</h3>
                                    <p class="mb-0">Product ID: 245468</p>
                                </div>
                            </div>
                        </div>
                        <!-- /Success Card -->

                    </div>
                </div>

            </div>
        </div>
        <!-- /Page Content -->
@endsection
