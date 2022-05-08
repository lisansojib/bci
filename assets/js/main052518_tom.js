

/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

var owlslider;
(function($){

    // Number of seconds in every time division
    var days	= 24*60*60,
        hours	= 60*60,
        minutes	= 60;

    // Creating the plugin
    $.fn.countdown = function(prop){

        var options = $.extend({
            callback	: function(){},
            timestamp	: 0
        },prop);

        var left, d, h, m, s, positions;

        // Initialize the plugin
        init(this, options);

        positions = this.find('.position');

        (function tick(){

            // Time left
            left = Math.floor((options.timestamp - (new Date())) / 1000);

            if(left < 0){
                left = 0;
            }

            // Number of days left
            d = Math.floor(left / days);
            updateDuo(0, 1, d);
            left -= d*days;

            // Number of hours left
            h = Math.floor(left / hours);
            updateDuo(2, 3, h);
            left -= h*hours;

            // Number of minutes left
            m = Math.floor(left / minutes);
            updateDuo(4, 5, m);
            left -= m*minutes;

            // Number of seconds left
            s = left;
            updateDuo(6, 7, s);

            // Calling an optional user supplied callback
            options.callback(d, h, m, s);

            // Scheduling another call of this function in 1s
            setTimeout(tick, 1000);
        })();

        // This function updates two digit positions at once
        function updateDuo(minor,major,value){
            switchDigit(positions.eq(minor),Math.floor(value/10)%10);
            switchDigit(positions.eq(major),value%10);
        }

        return this;
    };


    function init(elem, options){
        elem.addClass('countdownHolder');

        // Creating the markup inside the container
        $.each(['Days','Hours','Minutes','Seconds'],function(i){
            $('<span class="count'+this+'">').html(
                '<span class="position">\
                    <span class="digit static">0</span>\
                </span>\
                <span class="position">\
                    <span class="digit static">0</span>\
                </span>'
            ).appendTo(elem);

            if(this!="Seconds"){
                elem.append('<span class="countDiv countDiv'+i+'"></span>');
            }
        });

    }

    // Creates an animated transition between the two numbers
    function switchDigit(position,number){

        var digit = position.find('.digit')

        if(digit.is(':animated')){
            return false;
        }

        if(position.data('digit') == number){
            // We are already showing this number
            return false;
        }

        position.data('digit', number);

        var replacement = $('<span>',{
            'class':'digit',
            css:{
                top:'-2.1em',
                opacity:0
            },
            html:number
        });

        // The .static class is added when the animation
        // completes. This makes it run smoother.

        digit
            .before(replacement)
            .removeClass('static')
            .animate({top:'2.5em',opacity:0},'fast',function(){
                digit.remove();
            })

        replacement
            .delay(100)
            .animate({top:0,opacity:1},'fast',function(){
                replacement.addClass('static');
            });
    }
})(jQuery);


(function ($) {
    "use strict";

    jQuery(document).ready(function($){
        /*initialize WOW Js*/





        $('.thankyoupage').css('height', $(window).height());

        new WOW().init();
        /*Accordian Management*/
        var toogleAccordian = $(".toggle-accordion")
        toogleAccordian.on("click", function() {
            var accordionId = $(this).attr("accordion-id"),
              numPanelOpen = $(accordionId + ' .collapse.in').length;

            $(this).toggleClass("active");

          })


        /*--project counter activation--*/
          var projectCounter = $('.counter');
          projectCounter.each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 50000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
              });
            });
         /*--testimonial carousel slider activation--*/
          var testimonialCaoursel = $('.slider-activation');
          testimonialCaoursel.owlCarousel({
            loop:true,
            dots:true,
            nav:false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive : {
              0 : {
                  items: 1
              },
              768 : {
                  items: 1
              },
              960 : {
                  items: 1
              },
              1200 : {
                  items: 1
              },
              1920 : {
                  items: 1
              }
            }
        });
          var headerCaoursel = $('.head-slider');
          headerCaoursel.owlCarousel({
            loop:false,
            dots:false,
            nav:false,
            navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
            autoplay:false,
              mouseDrag:false,
            autoplayTimeout:9999999,
            autoplayHoverPause:true,
            responsive : {
              0 : {
                  items: 1
              },
              768 : {
                  items: 1
              },
              960 : {
                  items: 1
              },
              1200 : {
                  items: 1
              },
              1920 : {
                  items: 1
              }
            }
        });



        /*--top investors carousel slider activation--*/
 owlslider = $('.investor-carousel').owlCarousel({
    loop:false,
     margin:10,
    dots:false,
    nav:false,
    navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    autoplayTimeout:99999999,
    autoplayHoverPause:true,
    autoplay:false,
    mouseDrag:false,


    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

        /*--sponsors carousel slider activation--*/
$('.sponsor-carousel:not(.partner-section)').owlCarousel({
    loop:false,
     margin:40,
    dots:false,
    nav:false,
    navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    mouseDrag:false,
    autoplayTimeout:999999,
    autoplayHoverPause:false,
    autoplay:false,

    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

$('.sponsor-carousel.owl-theme.partner-section').owlCarousel({
    loop:false,
     margin:40,
    dots:false,
    nav:false,
    navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
    mouseDrag:false,

    autoplayTimeout:999999,
    autoplayHoverPause:false,
    autoplay:false,

    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});


    if ($( "body" ).hasClass( "newquantum" ) ) {

        $( ".menu-bar:not(.sub-menu-bar)").load( "/components/menuq.html", function() {
            if ( $(this).hasClass('mobile') ) $(this).slicknav();
        });

    } else {

        $( ".menu-bar:not(.sub-menu-bar)").load( "/components/menu.html", function() {
            if ( $(this).hasClass('mobile') ) $(this).slicknav();
        });
    }


        $( ".menu-bar:not(.sub-menu-bar)")

       /*--slick Nav Responsive Navbar activation--*/
          //var SlicMenu = $('#menu-bar');
         //SlicMenu.slicknav();
        /*--scroll to top activation--*/
        $(document).on('click', '.scroll-to-top a', function (e) {
            e.preventDefault();
            $("html,body").animate({
                scrollTop: 0
            }, 3000);

        });



        $('#menu-bar li:last-child, nav.head li:last-child').click(function () {
            window.location = $(this).find('a').attr('href')
        });




        $('ul.slicknav_nav a[style="color:#f06824;"]').on('hover', function () {
            console.log(11)
            $(this).css('color','#fff')
        });




        $('body').prepend('<div class="headCounter">' +
                '<div>' +
                    'BCI Summit in:' +
                '</div>' +
                '<div>' +
                    '<div id="countdown" class="countdownHolder"></div>' +
                '</div>' +
            '</div>')



        });

        setTimeout(function () {
            var note = $('#note'),
                ts = new Date(2018, 5, 11, 9, 0, 0),
                newYear = false;

            if((new Date()) > ts){
                // The new year is here! Count towards something else.
                // Notice the *1000 at the end - time must be in milliseconds
                ts = (new Date()).getTime() + 10*24*60*60*1000;
                newYear = false;
            }

            $('#countdown').countdown({
                timestamp	: ts,
                callback	: function(days, hours, minutes, seconds){


                }
            });
        }, 2000)

        $('.agenta-two-titles h4').on('click', function () {
            var $this = $(this);
           console.log($this.attr('data-id'))


            $('html, body').animate({
                scrollTop: $('.full-agenda-section').find('.col-md-12[data-id="'+$this.attr('data-id')+'"]').offset().top - 80
            }, 500);

        });


        $('.people-faces div').hover( function () {
            var $this = $(this);
           console.log($this.attr('data-name'));

           var textArr = $this.attr('data-name').split('<br/>')


            $this.prepend('<div class="namepopup">' +
                textArr[0]+ '<br><span>' + textArr[1] + '</span>' +
                '</div>')

        });
        $('.people-faces div').mouseleave(function () {
            $('.namepopup').remove()

        });






    /*--window Scroll functions--*/
        $(window).on('scroll', function () {
            /*--show and hide scroll to top --*/
            var ScrollTop = $('.scroll-to-top i');
            if ($(window).scrollTop() > 500) {
                ScrollTop.fadeIn(1000);
            } else {
                ScrollTop.fadeOut(1000);
            }
            /*--sticky menu activation--*/
            var mainMenuTop = $('.main-menu');
            if ($(window).scrollTop() > 300) {
                mainMenuTop.addClass('nav-fixed');
            } else {
                mainMenuTop.removeClass('nav-fixed');
            }
            /*--sticky menu activation--*/
            var slickNavTop = $('.slicknav_menu');
            var slickSubMenuTop = $('.sub-mobile-menu');
            var logoFixed = $('.mobile-logo')
            if ($(window).scrollTop() > 300) {
                slickSubMenuTop.addClass('nav-fixed');
                slickNavTop.addClass('nav-fixed');
                logoFixed.addClass('fixed');
            } else {
                slickSubMenuTop.removeClass('nav-fixed');
                slickNavTop.removeClass('nav-fixed');
                logoFixed.removeClass('fixed');
            }
            $('#sub-menu-bar-top a[data-href], #sub-menu-mobile a[data-href] ').css('color', '#333');
            $('#sub-menu-bar a[data-href] ').css('color', '#fff')
            $('#sub-menu-bar-top li, #sub-menu-mobile li ').css('background', 'transparent');

            // $('.slicknav_menu a[data-href]').css('color', 'rgb(51, 51, 51)');
            // $('.slicknav_menu a[data-href]').parent().css('background', 'transparent');


            $("#sub-menu-bar a[data-href]").each(function(index, item) {
                var anchor = item.getAttribute('data-href');
                var $targetEl = $('[data-anchor="' + anchor + '"]');
                var start = 0; var end = 0;
                if($targetEl.length > 0){
                    start = $('[data-anchor="' + anchor + '"]')[0].offsetTop - 130;
                    end = start + $('[data-anchor="' + anchor + '"]').height();
                }

                if (anchor === '#agenda') {
                    end = end - 600
                }

                if($(window).scrollTop() >  start && $(window).scrollTop() <  end  ) {
                    item.style.color = '#000';
                    $('#sub-menu-bar-top a[data-href="' + anchor + '"], #sub-menu-mobile a[data-href="' + anchor + '"]').parent().css('backgroundColor', '#F06824')
                    $('#sub-menu-bar-top a[data-href="' + anchor + '"], #sub-menu-mobile a[data-href="' + anchor + '"]').css('color', '#fff')
                }

            })

            window.onscroll = function(ev) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    $('#sub-menu-bar-top a[data-href="#location"], #sub-menu-mobile a[data-href="#location"]').parent().css('backgroundColor', '#F06824')
                    $('#sub-menu-bar-top a[data-href="#location"], #sub-menu-mobile a[data-href="#location"]').css('color', '#fff')
                }
            };

        });

    //timer
        var saveSent = false;
        var startTime, endTime;
        function startSTimer() {
            startTime = new Date();
        };
        window.onload = startSTimer();

        function timeDiff() {
            endTime = new Date();
            var timeDiff = endTime - startTime; //in ms
            timeDiff /= 1000;
            var seconds = Math.round(timeDiff);
            return seconds;
        }


    // Get the modal
        var modal = document.getElementById('signModal');
        if (modal) {
            modal.style.display = "none";
        }
    // Get the button that opens the modal
        var btn = document.getElementById("popBtn");
        var popCount = 0;

    // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // if (modal) {
        //     $("html").bind("mouseleave", function () {


        //         //get cookie
        //         var bcicookie = getCookie("closepop");
        //         if (bcicookie == "") {
        //             if (timeDiff() > 30 && !saveSent && popCount < 1) {
        //                 // modal.style.display = "flex";
        //                 $(modal).fadeIn(1000);
        //                 popCount += 1;
        //                 startSTimer();
        //             }
        //         }
        //         //$('#emailSignupModal').modal(); //or any modal
        //         //$("html").unbind("mouseleave");
        //     });
        // }

    // When the user clicks on the button, open the modal
        if (btn) {
            btn.onclick = function () {
                // modal.style.display = "flex";
                $(modal).fadeIn(1000);
            }
        }

    // When the user clicks on <span> (x), close the modal
        if (span) {
            span.onclick = function () {
               // modal.style.display = "none";
               //sessionStorage.setItem('closepop', '1'); // they closed the signup modal, remember and prevent popup again
               document.cookie = "closepop=1; max-age=3600; path=/";
               $(modal).fadeOut();
            }
        }

    // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
               // modal.style.display = "none";
               $(modal).fadeOut();
            }
        }



//function getCookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}


/*--window load functions--*/
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(300);


        setTimeout(function(){
           if($('#sub-menu-bar-top')){
            //  $('ul.slicknav_nav').append($('#sub-menu-bar-top').html())
            // $('ul.slicknav_nav').find('.vertical-line').remove()
           }



                $('#sub-menu-bar a[data-href], #sub-menu-bar-top a[data-href], #sub-menu-mobile a[data-href]').click( function(e){
                    e.preventDefault();

                    if($('#sub-menu-bar-top')){
                        $( ".menu-bar:not(.sub-menu-bar)").slicknav('close')
                       }

                    var anchor = $(this).attr('data-href');
                    console.log(anchor)

                     document.querySelector('[data-anchor="' + anchor + '"]').scrollIntoView({
                            behavior: 'smooth'
                        });

                })

                $('#sub-menu-bar a[data-href], #sub-menu-bar-top a[data-href], #sub-menu-mobile a[data-href]').parent('li').click( function(e){

                    if($('#sub-menu-bar-top')){
                        $( ".menu-bar:not(.sub-menu-bar)").slicknav('close')
                       }

                    var anchor = $(this).find('a[data-href]').attr('data-href');
                    console.log(anchor)

                     document.querySelector('[data-anchor="' + anchor + '"]').scrollIntoView({
                            behavior: 'smooth'
                        });

                })





        }, 1000)
    });


    var match = window.location.href.match(/\?CkId=([^&]+)/);
    if (match) {
        localStorage.setItem('CkId', match[1]);
    }

    var pageLoc = window.location.href.split("/").slice(-1);
    if (pageLoc.constructor === Array) pageLoc = pageLoc[0];
    if (!pageLoc || pageLoc == "") pageLoc = "index";
    if (pageLoc.length > 12) pageLoc = pageLoc.split('?')[0];

    var ck = localStorage.getItem('CkId');
    //var sva = localStorage.getItem('sva');
    //if (window.location.href.indexOf("Bar-Ends") != -1) {
    //    $("#notBarEnds").hide();
    //}

    // if (!ck) ck = "";

    // var sessionData;

    // $.ajax({
    //     url: '/api/session',
    //     type: 'POST',
    //     data: {
    //         "IPAddress": "0",
    //         "SesId": "",
    //         "CkId": ck,
    //         "PageEntered": pageLoc,
    //         "Feedback": 0,
    //         "CreatedOn": new Date().toISOString(),
    //         "ModifiedOn": "",
    //         "requestsMade": 0,
    //         "Error": ""
    //     },
    //     success: function (res) {
    //         sessionData = res;
    //     }
    // });





    jQuery(function ($) {
        var modal = $('#showModalMessage');

        function showModalMessage(message) {
            modal.find('.bigger').html(message);
            modal.css('display', 'flex')
        }

        $('.modal').find('.close').on('click', function () {
            modal.hide()
        });



         $('#contact-form.contct').on('submit', function (ev) {
             var $this = $(this);
             ev.preventDefault();

                var name = $('#contact-form.contct').find('input[name="name"]').val();
                var email = $('#contact-form.contct').find('input[name="email"]').val();
                var subject = $('#contact-form.contct').find('input[name="subject"]').val();
                var comment = $('#contact-form.contct').find('textarea').val();


                if(!$(this).find('input[name="isAgree"]').is(':checked')){
                    showModalMessage('You need to tick this checkbox to be able to contact us.');
                    return false
                }


                if (!name || !email || !subject || !comment) {
                    showModalMessage('one of the required fields is missing')
                } else {

                    $.ajax({
                        url: '/api/contact',
                        type: 'POST',
                        data: {
                            Name: name,
                            Email: email,
                            Type: 1,
                            Subject: subject,
                            Message: comment,
                            ReceievedOn: "",
                            Session: sessionData
                        },
                        success: function () {
                            showModalMessage('Thank you for your submission. We will be in touch soon.')
                            $this[0].reset();


                        },
                        //error: function () {
                        //    showModalMessage('some sort of error')
                        //    $this[0].reset();
                        //}
                        error: function(xhr, ajaxOptions, thrownError){
                        alert(xhr.status);
                    },
                    })
                }
        });



         $('#contact-form-sponsor').on('submit', function (ev) {
             var $this = $(this);
             ev.preventDefault();

                var name = $(this).find('input[name="name"]').val();
                var email = $(this).find('input[name="email"]').val();
                var phone = $(this).find('input[name="phone"]').val();
                var subject = $(this).find('input[name="subject"]').val();
                var comment = $(this).find('textarea').val();
                var bioLink = $(this).find('input[name="bioLink"]').val();
                var company = $(this).find('input[name="company"]').val();
                // var linkedInLink = $(this).find('input[name="linkedInLink"]').val();

             if(!$(this).find('input[name="isAgree"]').is(':checked')){
                 showModalMessage('You need to tick this checkbox to be able to contact us.');
                 return false
             }

                if (!name || !email || !subject || !comment) {
                    showModalMessage('one of the required fields is missing')
                } else {

                    $.ajax({
                        url: '/api/contact',
                        type: 'POST',
                        data: {
                            Name: name,
                            Email: email,
                            Phone: phone,
                            Type: 1,
                            Subject: subject,
                            Message: comment,
                            BioLink: bioLink,
                            Company: company,
                            ReceievedOn: "",
                            Session: sessionData
                        },
                        success: function () {
                            showModalMessage('Thank you for your submission. We will be in touch soon.');
                            $this[0].reset();

                        },
                        error: function () {
                            showModalMessage('Some sort of error');
                            $this[0].reset();

                        }
                    })
                }
        });



         $('#contact-form-speack').on('submit', function (ev) {
             var $this = $(this);

             ev.preventDefault();

             if(!$(this).find('input[name="isAgree"]').is(':checked')){
                 showModalMessage('You need to tick this checkbox to be able to contact us.');
                 return false
             }
                var name = $(this).find('input[name="name"]').val();
                var email = $(this).find('input[name="email"]').val();
                var phone = $(this).find('input[name="phone"]').val();
                var subject = $(this).find('input[name="subject"]').val();
                var comment = $(this).find('textarea').val();
                var bioLink = $(this).find('input[name="bioLink"]').val();
                var company = $(this).find('input[name="company"]').val();

                if (!name || !email || !subject || !comment) {
                    showModalMessage('one of the required fields is missing')
                } else {

                    $.ajax({
                        url: '/api/contact',
                        type: 'POST',
                        data: {
                            Name: name,
                            Email: email,
                            Phone: phone,
                            Type: 1,
                            Subject: subject,
                            Message: comment,
                            BioLink: bioLink,
                            Company: company,
                            ReceievedOn: "",
                            Session: sessionData
                        },
                        success: function () {
                            showModalMessage('Thank you for your submission. We will be in touch soon.');
                            $this[0].reset();

                        },
                        error: function () {
                            showModalMessage('Some sort of error');
                            $this[0].reset();
                        }
                    })
                }
        });




         $('#unsubscribe-form').on('submit', function (ev) {
             var $this = $(this);


            if (!isLoading && sessionData) {
                var res = $(this).find('input[name="res"]:checked').val();
                var other = $(this).find('input[name="other"]').val();
                var email = $(this).find('input[name="email"]').val();

                if (!res || !email) {
                    showModalMessage('one of the required fields is missing');

                } else {
                    hideError();
                    showLoading();
                    isLoading = true;
                    $.ajax({
                        url: '/api/unsubscribe',
                        type: 'POST',
                        data: {
                            CkId: localStorage.getItem('CkId'),
                            Res: res,
                            Email: email,
                            Other: other
                        },
                        success: function () {
                            showModalMessage('Thank you! Your your request has been submitted. Please allow up to 48 hours for the request to be processed.')
                            $this[0].reset();
                        },
                        error: function () {
                            showModalMessage('error!!')
                            $this[0].reset();
                        }
                    })
                }
            }
            ev.preventDefault();
        });



        function showUError(msg) {
            $error.text(msg).show();
        }

        function hideError() {
            $error.hide();
        }

        function showLoading() {
            $loading.show();
        }

        function hideLoading() {
            $loading.hide();
        }

        function finishCForm() {
            $unsubscribeForm.html('<h3>');
        }

        var isLoadingS = false;

        var $savesendForm = $('#savesend-form').on('submit', function (ev) {

            var $this = $(this);


            if (!isLoading && sessionData) {
                var name = $savesendForm.find('input[name="name"]').val();
                var email = $savesendForm.find('input[name="email"]').val();

                if (!email) {
                    showError('Please enter email');
                } else {
                    hideError();
                    showLoading();
                    isLoading = true;
                    $.ajax({
                        url: '/api/signup',
                        type: 'POST',
                        data: {
                            CkId: localStorage.getItem('CkId'),
                            Email: email,
                            Name: name,
                            SavingsId: '',
                            Type: 0,
                            Other:''
                        },
                        success: function () {
                            showModalMessage('Thank you for your submission. We will be in touch soon.');
                            $this[0].reset();
                        },
                        error: function () {
                            showModalMessage('error!!');
                            $this[0].reset();
                        }
                    })
                }
            }
            ev.preventDefault();
        });



        //function showSSError(msg) {
        //    $error.text(msg).show();
        //}

        //function hideError() {
        //    $error.hide();
        //}

        function showLoading() {
            $loading.show();
        }

        function hideLoading() {
            $loading.hide();
        }

        function finishSSForm() {
            $savesendForm.html('<h3>Thank you! <br>We will be in touch');
            popCount = 5;
        }


        var isLoading = false;
        var $error = $('#contact-form-error');
        var $loading = $('#contact-form-loading');

        var $contactForm = $('#promo-form').on('submit', function (ev) {
            var $this = $(this);
            if (!isLoading && sessionData) {
                var FirstName = $contactForm.find('input[name="FirstName"]').val();
                var LastName = $contactForm.find('input[name="LastName"]').val();
                var Email = $contactForm.find('input[name="Email"]').val();
                var Phone = $contactForm.find('input[name="Phone"]').val();
                var Street1 = $contactForm.find('input[name="Street1"]').val();
                var Street2 = $contactForm.find('input[name="Street2"]').val();
                var City = $contactForm.find('input[name="City"]').val();
                var State = $contactForm.find('input[name="State"]').val();
                var Zip = $contactForm.find('input[name="Zip"]').val();
                var Investor = $contactForm.find('input[name="Investor"]').val();
                var Country = $contactForm.find('input[name="Country"]').val();
                var Twitter = $contactForm.find('input[name="Twitter"]').val();
                var Title = $contactForm.find('input[name="Title"]').val();
                var agree_contact = $contactForm.find('input[name="agree_contact"]').val();

                if (!FirstName || !LastName || !Email || !Phone || !Street1 || !City || !State || !Zip || !Twitter ) {
                    showModalMessage('one of the required fields is missing');
                }
                else if (!agree_contact){
                    showModalMessage('You should agree contact updates.');
                } else {
                    hideError();
                    showLoading();
                    isLoading = true;
                    $.ajax({
                        url: '/api/promotion',
                        type: 'POST',
                        data: {
                            FirstName: FirstName,
                            LastName: LastName,
                            Street1: Street1,
                            Street2: Street2,
                            City: City,
                            State: State,
                            Zip: Zip,
                            Email: Email,
                            Phone: Phone,
                            Investor: Investor,
                            Title: Title,
                            Session: sessionData,
                            Country: Country,
                            Twitter: Twitter
                        },
                        success: function (data) {

                            if (data == 'Email already exists') {
                                showModalMessage(data);

                            } else {
                                showModalMessage('some sort of error');
                            }
                            showModalMessage('Thank you for your submission. We will be in touch soon.')
                            $this[0].reset();

                        },
                        error: function () {
                            showModalMessage('some sort of error');
                            $this[0].reset();
                        }
                    })
                }
            }
            ev.preventDefault();
        });

        function showError(msg) {
            $error.text(msg).show();
        }

        function hideError() {
            $error.hide();
        }

        function showLoading() {
            $loading.show();
        }

        function hideLoading() {
            $loading.hide();
        }

        function finishForm() {
            $contactForm.html('<h3>Thank you! <br>Your registration has been sent!');
        }

    });





$('.expand-desc').parent().click( function(e){
    var elem = $(this).find('.expand-desc');
    var id = elem.attr('data-expand');

    if(elem.hasClass('plus-i')){
        elem.css('padding-left', '6px');
        elem.css('font-size', '21px');
        elem.html('-');
        elem.removeClass('plus-i');
        $('[data-expanded="' + id + '"]').css('display', 'flex')

    } else {
        elem.addClass('plus-i');
        elem.css('padding-left', '4px')
        elem.css('font-size', '20px')
        elem.html('+');
        $('[data-expanded="' + id + '"]').css('display', 'none')
    }


})






//investor-carousel

$('.view-more-btn span[data-more]').click( function(e){
    var id = $(this).attr('data-more');

    $(this).parent().hide();
    $('.view-less-btn span[data-more="' + id + '"]').parent().show()
    $('.more-collapse[data-more="' + id + '"]').show()

    if($(this).attr('data-cont') == 'speakers'){
        $('.more-collapse.owl-theme[data-more="' + id + '"]').addClass('investor-carousel');

        $('.investor-carousel[data-more]').owlCarousel({
            loop:false,
            margin:10,
            dots:false,
            nav:false,
            navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
            autoplayTimeout:99999999,
            autoplayHoverPause:true,
            autoplay:false,
            mouseDrag:false,


            responsive:{
                0:{
                    items:4
                },
                600:{
                    items:4
                },
                1000:{
                    items:4
                }
            }
        });
    }
})


$('.view-less-btn span[data-more]').click( function(e){
    var id = $(this).attr('data-more');

    $(this).parent().hide();
    $('.view-more-btn span[data-more="' + id + '"]').parent().show()
    $('.more-collapse[data-more="' + id + '"]').hide()
})






}(jQuery));