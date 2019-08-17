// Section Intro

$(document).ready(function(){
    let intro = $('.image-slider-intro');
    intro.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false
    });
    $('.play').on('click',function(){
        intro.trigger('play.owl.autoplay',[4000])
    })
    $('.stop').on('click',function(){
        intro.trigger('stop.owl.autoplay')
    })

    // Section Experienced
    
    $('.image-slider-experienced').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })

        // Section Publications
    
        $('.slider-publications').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                    },
                1000:{
                    items:4
                    }
                }
        })

        // Section What People say

        $('.people-slider').owlCarousel({
            rtl:true,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:2
                }
            }
        })

        // Section Logos

        let logo = $('.logos-sliders');
        logo.owlCarousel({
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false
                }
            },
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        logo.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
        logo.trigger('stop.owl.autoplay')
    })

    //   Section Popular-Courses 

  $('.popular-card-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

    //   Section Upcoming-Events 

    $('.upcoming-card-slider').owlCarousel({
        loop:true,
        margin: 40,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
  });


