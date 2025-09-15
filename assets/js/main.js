/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
  'use strict';
  let device_width = window.innerWidth;

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      imJs.odoMeter();
      imJs.stickyHeader();
      imJs.wowActive();
      imJs.swiperJs();
      imJs.salActive();
      imJs.videoActivation();
      imJs.searchOption();
      imJs.cartBarshow();
      imJs.sideBarTwoshow();
      imJs.metismenu();
      imJs.sideMenu();
      imJs.backToTopInit();
      imJs.filterPrice();
      imJs.preloader();
      imJs.onePageNav();
      imJs.serviceHover();
      imJs.countDown();
    },
    odoMeter: function () {
      $(document).ready(function () {
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
        }

        function triggerOdometer(element) {
          const $element = $(element);
          if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            $element.html(countNumber);
            $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
          }
        }

        function handleOdometer() {
          $('.odometer').each(function () {
            if (isInViewport(this)) {
              triggerOdometer(this);
            }
          });
        }

        // Check on page load
        handleOdometer();

        // Check on scroll
        $(window).on('scroll', function () {
          handleOdometer();
        });
      });
    },
    // sticky header activation
    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('.header--sticky').addClass('sticky')
        } else {
          $('.header--sticky').removeClass('sticky')
        }
      })
    },
    // waw js activation
    wowActive: function () {
      new WOW().init();
    },
    // All swiper js
    swiperJs: function () {

      $(document).ready(function () {
        var swiper = new Swiper(".tmpSlider", {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 3000,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2.8,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider", {
          spaceBetween: 30,
          slidesPerView: 2,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider2", {
          spaceBetween: 0,
          slidesPerView: 2,
          slidesPerGroup: 1,
          loop: true,
          speed: 1500,
          // autoplay: {
          //   delay: 3000,
          // },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider3", {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: true,
          speed: 1500,
          // autoplay: {
          //   delay: 3000,
          // },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpBrandSlider", {
          spaceBetween: 60,
          slidesPerView: 5,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1500: {
              slidesPerView: 5,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 5,
            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 2,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTeamSlider", {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
          },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpWorkingSlider", {
          spaceBetween: 30,
          slidesPerView: 2.6,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 2.6,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        // Check if the sliders exist in the DOM
        if ($(".SlideThumb").length && $(".thumbBannerSlide").length) {
          // Initialize Thumbnail Slider
          var swiperThumb = new Swiper(".SlideThumb", {
            slidesPerView: 3, // Number of visible thumbnails
            spaceBetween: 0, // Space between thumbnails
            watchSlidesProgress: true, // Sync progress
            watchSlidesVisibility: true, // Update visibility
            slideToClickedSlide: true, // Click on thumbnail to navigate
          });

          // Initialize Main Slider
          var swiperMain = new Swiper(".thumbBannerSlide", {
            slidesPerView: 1, // Show one slide at a time
            spaceBetween: 0, // No space between slides
            speed: 1300, // Transition speed
            loop: true,
            effect: 'fade',
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            thumbs: {
              swiper: swiperThumb, // Link to thumbnail slider
            },
          });

          swiperMain.on("slideChange", function () {
            const currentIndex = swiperMain.realIndex;
            const paginationBullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
            if (paginationBullets.length) {
              paginationBullets.forEach((bullet, index) => {
                bullet.classList.toggle("swiper-pagination-bullet-active", index === currentIndex);
              });
            }
          });
        }
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider2", {
          spaceBetween: 30,
          slidesPerView: 1.6,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 1.6,
            },
            1199: {
              slidesPerView: 1.7,
            },
            991: {
              slidesPerView: 1.7,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider4", {
          spaceBetween: 30,
          slidesPerView: 2.4,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 2.4,
            },
            1199: {
              slidesPerView: 1.7,
            },
            991: {
              slidesPerView: 1.7,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider", {
          spaceBetween: 27,
          slidesPerView: 3,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 2,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpServiceSlider3", {
          spaceBetween: 14,
          slidesPerView: 7,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
          },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 7,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.5,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTrendingSlider", {
          spaceBetween: 30,
          slidesPerView: 4,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpProductSlider", {
          spaceBetween: 24,
          slidesPerView: 6,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          breakpoints: {
            1500: {
              slidesPerView: 6,
            },
            1199: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });
      var swiper = new Swiper(".thumbBannerSlide2", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1300,
        effect: "fade",
        loop: true,
        breakpoints: {
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          }
        },
        navigation: {
          nextEl: ".slide-next",
          prevEl: ".slide-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      $(document).ready(function () {
        // Initialize the first Swiper
        var swiperThumb = new Swiper(".tmp-testimonialSlider3", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          speed: 1800,
          loop: true,
          watchSlidesProgress: true, // Sync progress
          watchSlidesVisibility: true, // Update visibility
          slideToClickedSlide: true,
          pagination: {
            el: ".swiper-pagination-n",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTestimonialSlider4", {
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          // autoplay: {
          //   delay: 2500,
          // },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
          },
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".projectSlider4", {
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: false,
          loop: true,
          speed: 1000,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          loopFillGroupWithBlank: true,
        })
      });
      $(document).ready(function () {
        var swiper = new Swiper(".tmpTeamSlider2", {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 1,
          loop: true,
          speed: 1500,
          // autoplay: {
          //   delay: 3000,
          // },
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          },
        })
      });

    },
    // sal animatioin activation
    salActive: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },

    videoActivation: function () {
      $(document).ready(function () {
        $('.popup-youtube, .popup-video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
      });
    },
    // search popup
    searchOption: function () {
      $(document).on('click', '#close', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".search-input-area").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },
    // cart bar show
    cartBarshow: function () {
      // Cart Bar show & hide
      $(document).on('click', '.cart-icon', function () {
        $(".cart-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-cart', function () {
        $(".cart-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".cart-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });


    },
    // cart bar show
    sideBarTwoshow: function () {
      // Cart Bar show & hide
      $(document).on('click', '.dot-btn', function () {
        $(".side-bar2").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $(".side-bar2").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $(".side-bar2").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });



      $(function () {
        $(".button").on("click", function () {
          var $button = $(this);
          var $parent = $button.parent();
          var oldValue = $parent.find('.input').val();

          if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
          } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
              var newVal = parseFloat(oldValue) - 1;
            } else {
              newVal = 1;
            }
          }
          $parent.find('a.add-to-cart').attr('data-quantity', newVal);
          $parent.find('.input').val(newVal);
        });
      });

    },
    // metismenu
    metismenu: function () {
      $('#mobile-menu-active').metisMenu();
    },
    // side menu desktop
    sideMenu: function () {
      $(document).on('click', '#menu-btn', function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '.onepage .mainmenu li a', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },

    slideNav: function () {
      window.slide = new SlideNav();
    },

    onePageNav: function (e) {
      $(document).ready(function () {
        var nav = $('#nav');
        if (nav.length) {
          $('#nav').onePageNav();
        }
      });
    },

    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
          }
        });
        jQuery('.progress-wrap').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({
            scrollTop: 0
          }, duration);
          return false;
        })


      });

    },

    filterPrice: function () {
      var filter_price = $('.filter-price');
      if (filter_price.length) {
        var lowerSlider = document.querySelector('#lower');
        var upperSlider = document.querySelector('#upper');

        document.querySelector('#two').value = upperSlider.value;
        document.querySelector('#one').value = lowerSlider.value;

        var lowerVal = parseInt(lowerSlider.value);
        var upperVal = parseInt(upperSlider.value);

        upperSlider.oninput = function () {
          lowerVal = parseInt(lowerSlider.value);
          upperVal = parseInt(upperSlider.value);

          if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
              upperSlider.value = 4;
            }
          }
          document.querySelector('#two').value = this.value
        };

        lowerSlider.oninput = function () {
          lowerVal = parseInt(lowerSlider.value);
          upperVal = parseInt(upperSlider.value);
          if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
              lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
          }
          document.querySelector('#one').value = this.value
        };
      }
    },
    preloader: function () {

      var preload = $("#elevate-load");

      if (preload.length) {
        window.addEventListener('load', function () {
          document.querySelector('#elevate-load').classList.add("loaded");
        });
      };

    },
    serviceHover: function () {
      $('.single-varticle-product').hover(function () {
        $('.single-varticle-product.active').removeClass('active');
        $(this).addClass('active');
      });
    },
    countDown: function () {
      const countDown = {
        endDate: [],
        validElements: [],
        display: [],
        initialHeight: undefined,
        initialInnerDivMarginTop: undefined,
        originalBorderTopStyle: undefined,

        init: function () {
          $('.countDown').each(function () {
            const regex_match = $(this).text().match(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/);
            if (!regex_match) return;

            const end = new Date(regex_match[3], regex_match[2] - 1, regex_match[1], regex_match[4], regex_match[5], regex_match[6]);

            if (end > new Date()) {
              countDown.validElements.push($(this));
              countDown.endDate.push(end);
              countDown.changeTime($(this), end);
              $(this).html(countDown.display.next.map(item => `<div class='container'><div class='a'><div>${item}</div></div></div>`).join(''));
            } else {
              $(this).html("<p class='end'>Sorry, your session has expired.</p>");
            }
          });
        },

        reset: function (element) {
          // Optionally implement any reset animation or class cleanup here
        },

        changeTime: function (element, endTime) {
          if (!endTime) return;

          const now = new Date();
          if (now <= endTime) {
            this.display = {
              last: this.calcTime(endTime.getTime() - now.getTime() + 1000),
              next: this.calcTime(endTime.getTime() - now.getTime())
            };
            this.display.next = this.display.next.map(item => item.toString().padStart(2, '0'));
            this.display.last = this.display.last.map(item => item.toString().padStart(2, '0'));

            element.find('div.container div.a div').each((index, div) => {
              $(div).text(this.display.last[index]);
            });

            this.reset(element.find('div.container'));
          } else {
            element.html("<p class='end'>Sorry, your session has expired.</p>");
          }
        },

        calcTime: function (milliseconds) {
          const secondsTotal = Math.floor(milliseconds / 1000);
          const days = Math.floor(secondsTotal / 86400);
          const hours = Math.floor((secondsTotal % 86400) / 3600);
          const minutes = Math.floor((secondsTotal % 3600) / 60);
          const seconds = secondsTotal % 60;
          return [days, hours, minutes, seconds];
        }
      };

      $(function () {
        countDown.init();

        function updateCountdowns() {
          countDown.validElements.forEach((element, i) => {
            countDown.changeTime(element, countDown.endDate[i]);
          });
        }
        updateCountdowns();
        setInterval(updateCountdowns, 2000);
      });
    },

  }
  /* magnificPopup img view */
  $('.gallery-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  imJs.m();
})(jQuery, window)