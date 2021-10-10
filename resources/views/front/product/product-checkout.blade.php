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
                                <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title">Checkout</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Breadcrumb -->

        <!-- Page Content -->
        <div class="content">
            <div class="container">

                <div class="row">
                    <div class="col-md-6 col-lg-7">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Billing details</h3>
                            </div>
                            <div class="card-body">

                                <!-- Checkout Form -->
                                <form action="https://doccure-html.dreamguystech.com/template/payment-success.html">

                                    <!-- Personal Information -->
                                    <div class="info-widget">
                                        <h4 class="card-title">Personal Information</h4>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>First Name</label>
                                                    <input class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Last Name</label>
                                                    <input class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Email</label>
                                                    <input class="form-control" type="email">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Phone</label>
                                                    <input class="form-control" type="text">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="exist-customer">Existing Customer? <a href="#">Click here to login</a></div>
                                    </div>
                                    <!-- /Personal Information -->

                                    <!-- Shipping Details -->
                                    <div class="info-widget">
                                        <h4 class="card-title">Shipping Details</h4>
                                        <div class="terms-accept">
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="terms_accept">
                                                <label for="terms_accept">Ship to a different address?</label>
                                            </div>
                                        </div>
                                        <div class="form-group card-label">
                                            <label class="pl-0 ml-0 mb-2">Order notes (Optional)</label>
                                            <textarea rows="5" class="form-control" name="shipping"></textarea>
                                        </div>
                                    </div>
                                    <!-- /Shipping Details -->

                                    <div class="payment-widget">
                                        <h4 class="card-title">Payment Method</h4>

                                        <!-- Credit Card Payment -->
                                        <div class="payment-list">
                                            <label class="payment-radio credit-card-option">
													<input type="radio" name="radio" checked>
													<span class="checkmark"></span>
													Credit card
												</label>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group card-label">
                                                        <label for="card_name">Name on Card</label>
                                                        <input class="form-control" id="card_name" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group card-label">
                                                        <label for="card_number">Card Number</label>
                                                        <input class="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group card-label">
                                                        <label for="expiry_month">Expiry Month</label>
                                                        <input class="form-control" id="expiry_month" placeholder="MM" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group card-label">
                                                        <label for="expiry_year">Expiry Year</label>
                                                        <input class="form-control" id="expiry_year" placeholder="YY" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group card-label">
                                                        <label for="cvv">CVV</label>
                                                        <input class="form-control" id="cvv" type="text">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /Credit Card Payment -->

                                        <!-- Paypal Payment -->
                                        <div class="payment-list">
                                            <label class="payment-radio paypal-option">
													<input type="radio" name="radio">
													<span class="checkmark"></span>
													Paypal
												</label>
                                        </div>
                                        <!-- /Paypal Payment -->

                                        <!-- Terms Accept -->
                                        <div class="terms-accept">
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="terms_accept1">
                                                <label for="terms_accept1">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
                                            </div>
                                        </div>
                                        <!-- /Terms Accept -->

                                        <!-- Submit Section -->
                                        <div class="submit-section mt-4">
                                            <button type="submit" class="btn btn-primary submit-btn">Confirm and Pay</button>
                                        </div>
                                        <!-- /Submit Section -->

                                    </div>
                                </form>
                                <!-- /Checkout Form -->

                            </div>
                        </div>

                    </div>

                    <div class="col-md-6 col-lg-5 theiaStickySidebar">

                        <!-- Booking Summary -->
                        <div class="card booking-card">
                            <div class="card-header">
                                <h3 class="card-title">Your Order</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-center mb-0">
                                        <tr>
                                            <th>Product</th>
                                            <th class="text-right">Total</th>
                                        </tr>
                                        <tbody>
                                            <tr>
                                                <td>Safi Natural Blood Purifier Syrup 200 ml Manufactured By Hamdard (Wakf) Laboratories</td>
                                                <td class="text-right">$200</td>
                                            </tr>
                                            <tr>
                                                <td>Safi Natural Blood Purifier Syrup 200 ml</td>
                                                <td class="text-right">$200</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="booking-summary pt-5">
                                    <div class="booking-item-wrap">
                                        <ul class="booking-date">
                                            <li>Subtotal <span>$5,877.00</span></li>
                                            <li>Shipping <span>$25.00</span></li>
                                        </ul>
                                        <ul class="booking-fee">
                                            <li>Tax <span>$0.00</span></li>
                                        </ul>
                                        <div class="booking-total">
                                            <ul class="booking-total-list">
                                                <li>
                                                    <span>Total</span>
                                                    <span class="total-cost">$160</span>
                                                </li>
                                                <li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Booking Summary -->

                    </div>
                </div>

            </div>

        </div>
        <!-- /Page Content -->
@endsection
