<?php
	$dir = "assets/img/galleryS2019/";
	$file_list = [];
	$directory_list = [];

	// Sort in ascending order - this is default
	$a = scandir($dir);

	foreach ($a as $key => $value) {
		$type = substr($value, -3);
		if($type == 'png' || $type == 'jpg' || $type == 'JPG') {
			array_push($file_list, $value);
		}
		if(strpos($value, '.') === false) {
			array_push($directory_list, $value);
		}
	}

?>

<!DOCTYPE html>
<html lang="zxx">
<head>
    <title>BCI Summit | Gallery</title>
    <meta name="robots" content="noindex, nofollow">
    <meta name="description" content="BCI was established to provide trust, transparency, and targeted networking in the disruptive technology space. We connect companies with our global community of investors, innovators and educators through curated invite-only roundtables and other events. BCI is dedicated to fostering collaboration among top investment officers and furthering disruptive technology growth" />
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="BCI Summit | New York">
    <meta property="og:description" content="BCI is dedicated to fostering collaboration among top investment officers and furthering disruptive technology growth">
    <meta property="og:image" content="http://bcisummit.com/assets/img/ogbuilding.png">
    <meta property="og:url" content="http://bcisummit.com/index.php/?1">
    <meta property="og:site_name" content="BCI Summit">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@bcisummit" />
    <meta name="twitter:title" content="BCI Summit | New York">
    <meta name="twitter:description" content="BCI is dedicated to fostering collaboration among top investment officers and furthering disruptive technology growth">
    <meta name="twitter:image" content="http://bcisummit.com/assets/img/ogbuilding.png">
    <meta name="twitter:image:alt" content="BCI Summit | New York">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta itemprop="name" content="BCI Summit">
    <meta itemprop="description" content="BCI is dedicated to fostering collaboration among top investment officers and furthering disruptive technology growth">
    <meta itemprop="url" content="http://bcisummit.com/">
    <span itemprop="location" itemscope itemtype="http://schema.org/Place"><span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
<meta itemprop="addressLocality" content="New York, NY">
</span></span>

    <!--  Non-Essential, But Required for Analytics
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@website-username">-->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110674874-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-110674874-1');
    </script>
    <!-- Google Tag Manager -->
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TPCLFBQ');</script>
    <!-- End Google Tag Manager -->
    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css" href="assets/slick/slick.css"/>
    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css" href="assets/slick/slick-theme.css"/>

    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/owl.carousel.css" rel="stylesheet">
    <link href="assets/css/slicknav.min.css" rel="stylesheet">
    <link href="assets/css/animate.css" rel="stylesheet">
    <link href="assets/css/style060418_tom.css?v=2.8" rel="stylesheet">
    <link href="assets/css/responsive.css?v=2.8" rel="stylesheet">
    <link rel="icon" type="image/png" href="../assets/img/favicon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- light gallery -->
    <link href="https://cdn.rawgit.com/sachinchoolur/lightgallery.js/master/dist/css/lightgallery.css" rel="stylesheet">
    <link href="assets/css/lightgallery.css" rel="stylesheet">
    <!-- Chatra {literal} -->
    <script>
        window.ChatraSetup = {
            colors: {
                buttonText: '#f0f0f0', /* chat button text color */
                buttonBg: '#f06824'    /* chat button background color */
            }
        };
        (function(d, w, c) {
            w.ChatraID = 'rp3nFde9Tm8B5tSWR';
            var s = d.createElement('script');
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
            };
            s.async = true;
            s.src = 'https://call.chatra.io/chatra.js';
            if (d.head) d.head.appendChild(s);
        })(document, window, 'Chatra');
    </script>
    <!-- /Chatra {/literal} -->
    <script> gtag('event', 'conversion', {'send_to': 'AW-816360806/Q-lYCNrvmYMBEObaooUD'}); </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    

    <style>
        @media screen and (min-width: 1024px){
            .twocol.detail-content p {
                width: 50%;
                margin-bottom: 0;
                padding: 0 15px;
            }

        }


    </style>

</head>
<body class="homepagebody">

	<section class="breadcrumb-section contact-bg section-padding pastE">

        <nav class="head">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="logo">
                            <a href="index.php"><img src="assets/img/logo-temp-2.png" style="height:45px" alt="BCI Summit"></a>
                        </div>
                    </div>
                    <div class="col-md-9 text-right">
                        <nav>
                            <ul>
                        <!--<li><a href="bcisummit2018.html">BCI Summit 2018</a></li> --><li><a href="events.html">Events</a></li><li><a href="membership.html">Membership</a></li><li><a href="sponsor.html">Sponsor</a></li><li><a href="speakers.html">Speakers</a></li><li><a href="summit-2019.html">Register</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
                <h1>BCI Summit 2019</h1>
            </div>
        </div>
    </div>
</section>
<!--Header section end-->

    <section class="section-padding about-us-page abo about-page">
        <div class="container">
        	<div class="demo-gallery">
        		<ul id="lightgallery" class="list-unstyled row">
            <?php
            	foreach ($file_list as $key => $image) {
    		?>
    				<li class="col-xs-6 col-sm-4 col-md-3" data-src="assets/img/galleryS2019/<?php echo $image;?>" data-sub-html="<h4>BCI Summit</h4><p>2019</p>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
	                    <a href="">
	                        <img class="img-responsive" src="assets/img/galleryS2019/<?php if(file_exists('assets/img/galleryS2019/thumb/'.$image)==1){echo 'thumb/'.$image;}else{echo $image;} ?>" alt="" />
	                    </a>
	                </li>
	        <?php
            	}
            ?>
        </div>
    </section>


<footer style="padding-top: 0px !important;" class="footer-section section-padding padding-bottom-0 text-center">

    <div class="footer-bottom">
        <div class="footer-rights">
            <p class="copyright-text">
                © Copyright 2018 Verivent LLC - All Rights Reserved.
                <i>
                    All events, materials, topics and discussions are purely opinions and
                    are for information purposes only. It is not intended to be investment advice.
                    Seek a duly licensed professional for investment advice
                </i>
            </p>
        </div>

        <div class="social-link">
            <a target="_blank" href="https://www.meetup.com/BCISummit" ><i class="fa fa-meetup"></i>   </a>  <!--<span class="tooltiptext">Meetup</span>-->
            <a target="_blank" href="https://twitter.com/BciSummit"><i class="fa fa-twitter"></i></a>
            <a target="_blank" href="https://www.linkedin.com/company/bci-summit/"><i class="fa fa-linkedin"></i></a>
            <!--<a target="_blank" href="https://www.facebook.com/BCISumm/"><i class="fa fa-facebook"></i></a>-->
            <!--<a target="_blank" href="https://t.me/bcisummit"><i class="fa fa-telegram-plane"></i></a>-->
        </div>

        <div class="aFooter">
            <a href="terms.html">Terms and Conditions &nbsp;&nbsp;&nbsp; </a>
            <a href="privacy.html">Privacy Policy &nbsp;&nbsp;&nbsp; </a>
            <a href="contact.html"> Contact</a>
        </div>
    </div>




</footer><!--footer section end-->


<div id="signModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content text-center" style=" max-width: 410px; "> <span class="close">&times;</span>
        <p class="bigger"  style=" font-size: 25px; ">Stay updated with BCI Summit</p>
        <!--<p>Enter your name and primary email to win a FREE ticket to the BCI Summit every week till June 10: </p>-->

        <br>

        <form method="post" id="savesend-form-save">
            <input type="text" class="name" name="name" id="name" placeholder="Name">
            <input type="email" class="email" name="email" id="email" placeholder="Primary Email">
            <input type="submit" id="submit" value="SUBSCRIBE">
        </form>

        <div id="success"></div>


        <!-- <p style="margin-top: 19px; font-size: 14px; text-align: left; width: 283px; margin: 0px auto 10px auto; padding: 10px 10px 10px 10px;">
                <a href="offers/VIP-trip-giveaway.html" style="color: #fff; text-align: left; font-size: 14px;">
                    * See terms
                </a>
            </p> -->
    </div>
</div>
<script src="assets/js/countdown.js"></script>
<!--jquery script load-->
<script src="assets/js/jquery.js"></script>
<!--Owl carousel script load-->
<script src="assets/js/owl.carousel.min.js"></script>
<!--Bootstrap v3 script load here-->
<script src="assets/js/bootstrap.min.js"></script>
<!--Slick Nav Js File Load-->
<script src="assets/js/jquery.slicknav.min.js"></script>
<!-- Js File Load-->
<script src="assets/js/wow.min.js"></script>
<!--Main js file load-->
<script src="assets/js/main052518_tom.js?ver=5e"></script>
<!-- lightgallery -->
<script src="https://cdn.jsdelivr.net/picturefill/2.3.1/picturefill.min.js"></script>
<script src="https://cdn.rawgit.com/sachinchoolur/lightgallery.js/master/dist/js/lightgallery.js"></script>
<script src="https://cdn.rawgit.com/sachinchoolur/lg-pager.js/master/dist/lg-pager.js"></script>
<script src="https://cdn.rawgit.com/sachinchoolur/lg-autoplay.js/master/dist/lg-autoplay.js"></script>
<script src="https://cdn.rawgit.com/sachinchoolur/lg-fullscreen.js/master/dist/lg-fullscreen.js"></script>
<script src="https://cdn.rawgit.com/sachinchoolur/lg-zoom.js/master/dist/lg-zoom.js"></script>
<script src="https://cdn.rawgit.com/sachinchoolur/lg-hash.js/master/dist/lg-hash.js"></script>
<script src="https://cdn.rawgit.com/sachinchoolur/lg-share.js/master/dist/lg-share.js"></script>
<script>
    lightGallery(document.getElementById('lightgallery'));
    var loc = window.location.pathname;
    var dir = loc.substring(1, loc.lastIndexOf('/'));
    console.log(dir);
</script>

<script type="text/javascript" src="assets/slick/slick.js"></script>

<!-- Twitter universal website tag code -->
<script>
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    // Insert Twitter Pixel ID and Standard Event data below
    twq('init','nzle8');
    twq('track','PageView');
</script>
<!-- End Twitter universal website tag code -->
<script>
    var fs = require('fs');
    var files = fs.readdirSync('/assets/img/');
    console.log(files);
</script>

<script>
    $('.openNewPopup').click(function (e) {
        e.preventDefault();
        var Id = $(this).attr("data-popup");

        $('body, html').css('overflow', 'hidden');
        $('.formNewpopUp[data-popup="'+Id+'"]').fadeIn(400);
    });


    //    $('.closeBtn, .formNewpopUp').click(function () {
    $('.closeBtn').click(function () {
        $('.formNewpopUp').fadeOut(400);
        $('body, html').css('overflow', 'auto');
    })


    $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            }
        ]
    });



</script>




</body>
</html>
