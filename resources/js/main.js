$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 685) {
            $('.navbar-dark').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 686) {
            $('.navbar-dark').removeClass('fixed-top');
        }
    });


    /*--nav smooth scrolling script--*/

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top -35
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });




    /*--google map--*/
    var map = new GMaps({
        div: '.map',
        lat: 22.6117812,
        lng: 120.2970664
    });


    map.addMarker({
        lat: 22.6117812,
        lng: 120.2970664,
        title: '高雄85大樓',
        infoWindow: {
            content: '<p>高雄85大樓</p>'
        }
    });
    
    /*--animate--*/
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated pulse');   
    },{
        offset:'50%'        
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInDown');   
    },{
        offset:'50%'        
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInUp');   
    },{
        offset:'50%'        
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated slideInRight');   
    },{
        offset:'50%'        
    });

    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animated bounceIn');   
    },{
        offset:'50%'        
    });

});
