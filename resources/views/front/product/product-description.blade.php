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
                                <li class="breadcrumb-item active" aria-current="page">Product Description</li>
                            </ol>
                        </nav>
                        <h2 class="breadcrumb-title">Product Description</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Breadcrumb -->

        <!-- Page Content -->
        <div class="content">
            <div class="container-fluid">

                <div class="row">

                    <div class="col-md-7 col-lg-9 col-xl-9">
                        <!-- Doctor Widget -->
                        <div class="card">
                            <div class="card-body product-description">
                                <div class="doctor-widget">
                                    <div class="doc-info-left">
                                        <div class="doctor-img1">
                                            <img src="assets/img/products/product.jpg" class="img-fluid" alt="User Image">
                                        </div>
                                        <div class="doc-info-cont">
                                            <h4 class="doc-name mb-2">Benzaxapine Croplex</h4>
                                            <p><span class="text-muted">Manufactured By </span> Hamdard (Wakf) Laboratories</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                            <div class="feature-product pt-4">
                                                <span>Applied for:</span>
                                                <ul>
                                                    <li>Moisturization & Nourishment</li>
                                                    <li>Blackhead Removal</li>
                                                    <li>Anti-acne & Pimples</li>
                                                    <li>Whitening & Fairness</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <!-- /Doctor Widget -->

                        <!-- Doctor Details Tab -->
                        <div class="card">
                            <div class="card-body pt-0">

                                <!-- Tab Menu -->
                                <h3 class="pt-4">Product Details</h3>
                                <hr>
                                <!-- /Tab Menu -->

                                <!-- Tab Content -->
                                <div class="tab-content pt-3">

                                    <!-- Overview Content -->
                                    <div role="tabpanel" id="doc_overview" class="tab-pane fade show active">
                                        <div class="row">
                                            <div class="col-md-9">

                                                <!-- About Details -->
                                                <div class="widget about-widget">
                                                    <h4 class="widget-title">Description</h4>
                                                    <p>Safi syrup is best for purifying the blood. As it contains herbal extracts it can cure indigestion, constipation, nose bleeds and acne boils. It helps in the removal of the toxins from the blood. It
                                                        improves the complexion and gives you a healthy life</p>
                                                </div>
                                                <!-- /About Details -->


                                                <!-- Awards Details -->
                                                <div class="widget awards-widget">
                                                    <h4 class="widget-title">Highlights</h4>
                                                    <div class="experience-box">
                                                        <ul class="experience-list">
                                                            <li>
                                                                <div class="experience-user">
                                                                    <div class="before-circle"></div>
                                                                </div>
                                                                <div class="experience-content">
                                                                    <div class="timeline-content">
                                                                        <p>Safi syrup is known for its best purifying syrup for blood.</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="experience-user">
                                                                    <div class="before-circle"></div>
                                                                </div>
                                                                <div class="experience-content">
                                                                    <div class="timeline-content">

                                                                        <p>It helps in eliminating the toxins from the bloodstream.</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="experience-user">
                                                                    <div class="before-circle"></div>
                                                                </div>
                                                                <div class="experience-content">
                                                                    <div class="timeline-content">

                                                                        <p>It improves digestion.</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="experience-user">
                                                                    <div class="before-circle"></div>
                                                                </div>
                                                                <div class="experience-content">
                                                                    <div class="timeline-content">

                                                                        <p>It also helps in indigestion and constipation.</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <!-- /Awards Details -->

                                                <!-- About Details -->
                                                <div class="widget about-widget">
                                                    <h4 class="widget-title">Directions for use</h4>
                                                    <p>Adults: Take 2 tablespoons once a day in a glass full of water.</p>
                                                </div>
                                                <!-- /About Details -->

                                                <!-- About Details -->
                                                <div class="widget about-widget">
                                                    <h4 class="widget-title">Storage</h4>
                                                    <p>Store this syrup at room temperature protected from sunlight, heat, and moisture. Keep away from reaching out of children and pets. Ensure that the unused medicine is disposed of properly.</p>
                                                </div>
                                                <!-- /About Details -->
                                                <!-- About Details -->
                                                <div class="widget about-widget">
                                                    <h4 class="widget-title">Administration Instructions</h4>
                                                    <p>Shake the bottle before its use. This syrup can be taken with or without food. The quantity consumed should not be lesser or greater than the prescribed one.</p>
                                                </div>
                                                <!-- /About Details -->

                                                <!-- About Details -->
                                                <div class="widget about-widget">
                                                    <h4 class="widget-title">Warning</h4>
                                                    <p>This is not recommended for the pregnant women and lactating mothers.</p>
                                                </div>
                                                <!-- /About Details -->
                                                <!-- About Details -->
                                                <div class="widget about-widget mb-3">
                                                    <h4 class="widget-title">Precaution</h4>
                                                    <p class="mb-0">Syrup has to be disposed of properly after 3 years from manufactured date and it is not recommended to use after the date.</p>
                                                </div>
                                                <!-- /About Details -->
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Overview Content -->

                                </div>
                            </div>
                        </div>
                        <!-- /Doctor Details Tab -->

                    </div>

                    <div class="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">

                        <!-- Right Details -->
                        <div class="card search-filter">
                            <div class="card-body">
                                <div class="clini-infos mt-0">
                                    <h2>$19 <b class="text-lg strike">$45</b> <span class="text-lg text-success"><b>10% off</b></span></h2>
                                </div>
                                <span class="badge badge-primary">In stock</span>
                                <div class="custom-increment pt-4">
                                    <div class="input-group1">
                                        <span class="input-group-btn float-left">
		                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
		                                          <span><i class="fas fa-minus"></i></span>
                                        </button>
                                        </span>
                                        <input type="text" id="quantity" name="quantity" class=" input-number" value="10">
                                        <span class="input-group-btn float-right">
		                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
		                                            <span><i class="fas fa-plus"></i></span>
                                        </button>
                                        </span>
                                    </div>
                                </div>
                                <div class="clinic-details mt-4">
                                    <div class="clinic-booking">
                                        <a class="apt-btn" href="cart.html">Add To Cart</a>
                                    </div>
                                </div>
                                <div class="card flex-fill mt-4 mb-0">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">SKU <span class="float-right">201902-0057</span></li>
                                        <li class="list-group-item">Pack Size <span class="float-right">100g</span></li>
                                        <li class="list-group-item">Unit Count <span class="float-right">200ml</span></li>
                                        <li class="list-group-item">Country <span class="float-right">Japan</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card search-filter">
                            <div class="card-body">
                                <div class="card flex-fill mt-0 mb-0">
                                    <ul class="list-group list-group-flush benifits-col">
                                        <li class="list-group-item d-flex align-items-center">
                                            <div>
                                                <i class="fas fa-shipping-fast"></i>
                                            </div>
                                            <div>
                                                Free Shipping<br><span class="text-sm">For orders from $50</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex align-items-center">
                                            <div>
                                                <i class="far fa-question-circle"></i>
                                            </div>
                                            <div>
                                                Support 24/7<br><span class="text-sm">Call us anytime</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex align-items-center">
                                            <div>
                                                <i class="fas fa-hands"></i>
                                            </div>
                                            <div>
                                                100% Safety<br><span class="text-sm">Only secure payments</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex align-items-center">
                                            <div>
                                                <i class="fas fa-tag"></i>
                                            </div>
                                            <div>
                                                Hot Offers<br><span class="text-sm">Discounts up to 90%</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /Right Details -->

                    </div>

                </div>



            </div>
        </div>
        <!-- /Page Content -->

    <!-- Voice Call Modal -->
    <div class="modal fade call-modal" id="voice_call">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <!-- Outgoing Call -->
                    <div class="call-box incoming-box">
                        <div class="call-wrapper">
                            <div class="call-inner">
                                <div class="call-user">
                                    <img alt="User Image" src="assets/img/doctors/doctor-thumb-02.jpg" class="call-avatar">
                                    <h4>Dr. Darren Elder</h4>
                                    <span>Connecting...</span>
                                </div>
                                <div class="call-items">
                                    <a href="javascript:void(0);" class="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
                                    <a href="voice-call.html" class="btn call-item call-start"><i class="material-icons">call</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Outgoing Call -->

                </div>
            </div>
        </div>
    </div>
    <!-- /Voice Call Modal -->

    <!-- Video Call Modal -->
    <div class="modal fade call-modal" id="video_call">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">

                    <!-- Incoming Call -->
                    <div class="call-box incoming-box">
                        <div class="call-wrapper">
                            <div class="call-inner">
                                <div class="call-user">
                                    <img class="call-avatar" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                    <h4>Dr. Darren Elder</h4>
                                    <span>Calling ...</span>
                                </div>
                                <div class="call-items">
                                    <a href="javascript:void(0);" class="btn call-item call-end" data-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
                                    <a href="video-call.html" class="btn call-item call-start"><i class="material-icons">videocam</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Incoming Call -->

                </div>
            </div>
        </div>
    </div>
    <!-- Video Call Modal -->

@endsection
