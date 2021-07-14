jQuery(function ( $ ){


	"use strict";

        // Page loading animation

        $("#preloader").animate({
          'opacity': '0'
      }, 600, function(){
          setTimeout(function(){
              $("#preloader").css("visibility", "hidden").fadeOut();
          }, 300);
      });
      
        

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });

        
        $('#customers-testimonials').owlCarousel({
          loop: true,
          center:true,
          
          margin: 0,
          autoplay: false,
          dots:true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1170: {
              items: 3
            }
          }
      });
        
            $('.owl-clients').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 2,
                        margin: 0
                    },
                    576: {
                        items: 3,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
     

        
            $('.owl-banner').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 0,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 1,
                        margin: 20
                    },
                    992: {
                        items: 1,
                        margin: 30
                    }
                }
            });
        
        
            $('.owl-products-slider').owlCarousel({
                loop: false,
                
                nav: true,
                dots: false,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 4,
                        
                    
                    }
                }
            });
        

        
            $('#slider' ).owlCarousel({
                 loop: false,
                 arrow:true,
                 items: 5,
                 loop: true,
                 dots:true,
                 autoplayTimeout: 8500,
                 smartSpeed: 450,
                 responsive: {
                     0: {
                         items: 1
                        },
                    480:{
                        items: 2
                        },
                    768: {
                        items: 3
                        },
                    1170: {
                        items: 4
                        }
                }
             }); 
             
             $('#t-slider' ).owlCarousel({
              loop: false,
              arrow:true,
              items: 5,
              loop: true,
              dots:true,
              autoplayTimeout: 8500,
              smartSpeed: 450,
              responsive: {
                  0: {
                      items: 1
                     },
                 480:{
                     items: 2
                     },
                 768: {
                     items: 3
                     },
                 1170: {
                     items: 4
                     }
             }
          }); 

          $('#w-slider' ).owlCarousel({
            loop: false,
            arrow:true,
            items: 5,
            loop: true,
            dots:true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                   },
               480:{
                   items: 2
                   },
               768: {
                   items: 3
                   },
               1170: {
                   items: 4
                   }
           }
        }); 

        $('#b-slider' ).owlCarousel({
          loop: false,
          arrow:true,
          items: 5,
          loop: true,
          dots:true,
          autoplayTimeout: 8500,
          smartSpeed: 450,
          responsive: {
              0: {
                  items: 1
                 },
             480:{
                 items: 2
                 },
             768: {
                 items: 3
                 },
             1170: {
                 items: 4
                 }
         }
      }); 
                
              

            
             $('#category-sliders').owlCarousel({
                 loop: false,
     
      
                 items: 4,
                 loop: true,
                 dots:true,
                 autoplayTimeout: 8500,
                 smartSpeed: 450,
                 responsive: {
                     0: {
                         items: 1
                        },
                    480:{
                        items: 2
                        },
                    768: {
                        items: 3
                        },
                    1170: {
                        items: 4
                        }
                }
             });


             
             
                var bigimage = $("#big");
                var thumbs = $("#thumbs");
                //var totalslides = 10;
                var syncedSecondary = true;
              
                bigimage
                  .owlCarousel({
                  items: 1,
                  slideSpeed: 2000,
                  nav: false,
                  autoplay: true,
                  dots: false,
                  loop: true,
                  responsiveRefreshRate: 200,
                //  navText: [
                //    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                //    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
              //    ]
                })
                  .on("changed.owl.carousel", syncPosition);
              
                thumbs
                  .on("initialized.owl.carousel", function() {
                  thumbs
                    .find(".owl-item")
                    .eq(0)
                    .addClass("current");
                })
                  .owlCarousel({
                  items: 4,
                  dots: true,
                  nav: false,
                  
                 // navText: [
                //    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                //    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
               //   ],
                  smartSpeed: 200,
                  slideSpeed: 500,
                  slideBy: 4,
                  responsiveRefreshRate: 100
                })
                  .on("changed.owl.carousel", syncPosition2);
              
                function syncPosition(el) {
                  //if loop is set to false, then you have to uncomment the next line
                  //var current = el.item.index;
              
                  //to disable loop, comment this block
                  var count = el.item.count - 1;
                  var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
              
                  if (current < 0) {
                    current = count;
                  }
                  if (current > count) {
                    current = 0;
                  }
                  //to this
                  thumbs
                    .find(".owl-item")
                    .removeClass("current")
                    .eq(current)
                    .addClass("current");
                  var onscreen = thumbs.find(".owl-item.active").length - 1;
                  var start = thumbs
                  .find(".owl-item.active")
                  .first()
                  .index();
                  var end = thumbs
                  .find(".owl-item.active")
                  .last()
                  .index();
              
                  if (current > end) {
                    thumbs.data("owl.carousel").to(current, 100, true);
                  }
                  if (current < start) {
                    thumbs.data("owl.carousel").to(current - onscreen, 100, true);
                  }
                }
              
                function syncPosition2(el) {
                  if (syncedSecondary) {
                    var number = el.item.index;
                    bigimage.data("owl.carousel").to(number, 100, true);
                  }
                }
              
                thumbs.on("click", ".owl-item", function(e) {
                  e.preventDefault();
                  var number = $(this).index();
                  bigimage.data("owl.carousel").to(number, 300, true);
                });
               

             
});
