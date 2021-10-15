//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-bild')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');

      if (slider.classList.contains('_swiper_scroll')) {
        let sliderScroll = document.createElement('div');
        sliderScroll.classList.add('swiper-scrollbar');
        slider.appendChild(sliderScroll);
      }
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}
function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
  for (let index = 0; index < sliderScrollItems.length; index++) {
    const sliderScrollItem = sliderScrollItems[index];
    const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
    const sliderScroll = new Swiper(sliderScrollItem, {
      observer: true,
      observeParents: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: sliderScrollBar,
        draggable: true,
        snapOnRelease: false,
      },
      mousewheel: {
        releaseOnEdges: true,
      },
    });
    sliderScroll.scrollbar.updateSize();
  }
}

function sliders_bild_callback(params) {}

// ===================================================
if (document.querySelector('.mach-line__slider')) {
  new Swiper('.mach-line__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 7,
    spaceBetween: 1,
    speed: 800,
    //loop: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.mach-line__arrow_next',
      prevEl: '.mach-line__arrow_prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        autoHeight: true,
      },
      768: {
        slidesPerView: 3,
      },
      960: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 7,
      },
    },

    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.news-search-results__slider')) {
  new Swiper('.news-search-results__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.news-search-results .header-search-results__arrow_next',
      prevEl: '.news-search-results .header-search-results__arrow_prev',
    },
    pagination: {
      el: '.news-search-results .header-search-results__fraction',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.forecasts-search-results__slider')) {
  new Swiper('.forecasts-search-results__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.forecasts-search-results .header-search-results__arrow_next',
      prevEl: '.forecasts-search-results .header-search-results__arrow_prev',
    },
    pagination: {
      el: '.forecasts-search-results .header-search-results__fraction',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.streams-search-results__slider')) {
  new Swiper('.streams-search-results__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 16,
    speed: 800,
    //loop: true,
    autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.streams-search-results .header-search-results__arrow_next',
      prevEl: '.streams-search-results .header-search-results__arrow_prev',
    },
    pagination: {
      el: '.streams-search-results .header-search-results__fraction',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.learning-search-results__slider')) {
  new Swiper('.learning-search-results__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 16,
    speed: 800,
    //loop: true,
    autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.learning-search-results .header-search-results__arrow_next',
      prevEl: '.learning-search-results .header-search-results__arrow_prev',
    },
    pagination: {
      el: '.learning-search-results .header-search-results__fraction',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.users-search-results__slider')) {
  new Swiper('.users-search-results__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 16,
    speed: 800,
    //loop: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.users-search-results .header-search-results__arrow_next',
      prevEl: '.users-search-results .header-search-results__arrow_prev',
    },
    pagination: {
      el: '.users-search-results .header-search-results__fraction',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.bet-search-results__slider')) {
  new Swiper('.bet-search-results__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    spaceBetween: 14,
    speed: 800,
    //loop: true,
    autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.bet-search-results .header-search-results__arrow_next',
      prevEl: '.bet-search-results .header-search-results__arrow_prev',
    },
    pagination: {
      el: '.bet-search-results .header-search-results__fraction',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.comments-search-results__slider')) {
  new Swiper('.comments-search-results__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 2,
    slidesPerColumn: 3,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.comments-search-results .header-search-results__arrow_next',
      prevEl: '.comments-search-results .header-search-results__arrow_prev',
    },
    pagination: {
      el: '.comments-search-results .header-search-results__fraction',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
      },
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.mainslider__body')) {
  const mainSlider = new Swiper('.mainslider__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    init: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    //loop: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.mainslider__arrow_next',
      prevEl: '.mainslider__arrow_prev',
    },
    pagination: {
      el: '.mainslider__dotts',
      type: 'bullets',
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
      afterInit: function (slider) {
        let speed = slider.params.speed + slider.params.autoplay.delay;
        slider.pagination.bullets.forEach((bullet, index) => {
          if (!index) {
            bullet.classList.add('_first');
            bullet.innerHTML = `<span style="animation-duration: ${slider.params.autoplay.delay}ms;"></span>`;
          } else {
            bullet.innerHTML = `<span style="animation-duration: ${speed}ms;"></span>`;
          }
        });
      },
      slideChange: function (slider) {
        if (slider.pagination.bullets[0].classList.contains('_first')) {
          let speed = slider.params.speed + slider.params.autoplay.delay;
          slider.pagination.bullets[0].innerHTML = `<span style="animation-duration: ${speed}ms;"></span>`;
          slider.pagination.bullets[0].classList.remove('_first');
        }
      },
    },
  });
  mainSlider.init();
}
//========================================================================================================================================================
if (document.querySelector('.home-news__slider ')) {
  let slidesPerView = 4;
  if (document.querySelector('.home-news__slider').closest('.page__row')) {
    slidesPerView = 3;
  }
  new Swiper('.home-news__slider ', {
    observer: true,
    observeParents: true,
    slidesPerView: slidesPerView,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.home-news__arrow_next',
      prevEl: '.home-news__arrow_prev',
    },
    pagination: {
      el: '.home-news__dotts',
      clickable: true,
      type: 'bullets',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: slidesPerView,
        spaceBetween: 32,
      },
    },

    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
//========================================================================================================================================================
if (document.querySelector('.matches__slider')) {
  new Swiper('.matches__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.matches__arrow_next',
      prevEl: '.matches__arrow_prev',
    },
    pagination: {
      el: '.matches__dotts',
      clickable: true,
      type: 'bullets',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}
//========================================================================================================================================================
if (document.querySelector('.reviews__slider')) {
  new Swiper('.reviews__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 56,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.reviews__arrow_next',
      prevEl: '.reviews__arrow_prev',
    },
    pagination: {
      el: '.reviews__dotts',
      clickable: true,
      type: 'bullets',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
        slidesPerView: 1.56,
        initialSlide: 1,
        centeredSlides: true,
      },
      350: {
        spaceBetween: 16,
      },
      768: {
        spaceBetween: 30,
      },
      959.58: {
        spaceBetween: 56,
      },
    },

    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
const mediaSlider = document.querySelector('.media__slider');
if (mediaSlider) {
  let sliderMediaLending;
  function bildsliderMediaLending() {
    if (window.innerWidth > 500 && mediaSlider.dataset.mobile == 'false') {
      mediaSlider.dataset.mobile = 'true';
      sliderMediaLending = new Swiper('.media__slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 32,
        speed: 800,
        //loop: true,
        watchOverflow: true,
        // Arrows
        navigation: {
          nextEl: '.media__arrow_next',
          prevEl: '.media__arrow_prev',
        },
        pagination: {
          el: '.media__dotts',
          type: 'bullets',
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1268: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 32,
          },
        },

        on: {
          lazyImageReady: function () {
            ibg();
          },
        },
      });
    }
    if (window.innerWidth <= 500) {
      mediaSlider.dataset.mobile = 'false';

      if (mediaSlider.classList.contains('swiper-container-initialized')) {
        sliderMediaLending.destroy();
      }
    }
  }
  bildsliderMediaLending();
}

// if (document.querySelector('.media__slider')) {
//   new Swiper('.media__slider', {
//     observer: true,
//     observeParents: true,
//     slidesPerView: 4,
//     slidesPerColumn: 2,
//     spaceBetween: 32,
//     speed: 800,
//     //loop: true,
//     watchOverflow: true,
//     // Arrows
//     navigation: {
//       nextEl: '.media__arrow_next',
//       prevEl: '.media__arrow_prev',
//     },
//     pagination: {
//       el: '.media__dotts',
//       type: 'bullets',
//       clickable: true,
//     },

//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         autoHeight: true,
//       },
//       500: {
//         slidesPerView: 2,
//         spaceBetween: 16,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       992: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       1268: {
//         slidesPerView: 4,
//         slidesPerColumn: 2,
//         spaceBetween: 32,
//       },
//     },

//     on: {
//       lazyImageReady: function () {
//         ibg();
//       },
//     },
//   });
// }
if (document.querySelector('.partners__slider')) {
  new Swiper('.partners__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.partners__arrow_next',
      prevEl: '.partners__arrow_prev',
    },
    pagination: {
      el: '.partners__dotts',
      clickable: true,
      type: 'bullets',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 3,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      959.98: {
        slidesPerView: 2,
      },
      1198.98: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },

    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.items-month-analytics__slider')) {
  new Swiper('.items-month-analytics__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 6,
    spaceBetween: 10,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.items-month-analytics__arrow_next',
      prevEl: '.items-month-analytics__arrow_prev',
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.item-news__slider')) {
  new Swiper('.item-news__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    //autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.item-news__arrow_next',
      prevEl: '.item-news__arrow_prev',
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.slider-news__body')) {
  new Swiper('.slider-news__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    //autoHeight: true,
    watchOverflow: true,
    // Arrows
    navigation: {
      nextEl: '.slider-news__controls ._arrow_next, .slider-news__arrow_next',
      prevEl: '.slider-news__controls ._arrow_prev, .slider-news__arrow_prev',
    },
    pagination: {
      el: '.slider-news__controls ._dotts',
      type: 'bullets',
      clickable: true,
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.slider-broadcasts')) {
  new Swiper('.slider-broadcasts', {
    observer: true,
    observeParents: true,
    slidesPerView: 6,
    spaceBetween: 24,
    speed: 800,
    loop: true,
    watchOverflow: true,
    slideToClickedSlide: true,
    initialSlide: 1,
    // Arrows
    navigation: {
      nextEl: '.broadcasts__arrow_next',
      prevEl: '.broadcasts__arrow_prev',
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.slider-main-tournament')) {
  new Swiper('.slider-main-tournament', {
    observer: true,
    observeParents: true,
    slidesPerView: 6,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    autoHeight: true,
    watchOverflow: true,
    slideToClickedSlide: true,
    // Arrows
    navigation: {
      nextEl: '.main-tournament__arrow_next',
      prevEl: '.main-tournament__arrow_prev',
    },
    pagination: {
      el: '.main-tournament__dotts',
      clickable: true,
      type: 'bullets',
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.slider-current-lineup')) {
  new Swiper('.slider-current-lineup', {
    observer: true,
    observeParents: true,
    slidesPerView: 6,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    autoHeight: true,
    watchOverflow: true,
    slideToClickedSlide: true,
    // Arrows
    navigation: {
      nextEl: '.current-lineup__arrow_next',
      prevEl: '.current-lineup__arrow_prev',
    },
    pagination: {
      el: '.current-lineup__dotts',
      clickable: true,
      type: 'bullets',
    },
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
if (document.querySelector('.slider-trophies')) {
  new Swiper('.slider-trophies', {
    observer: true,
    observeParents: true,
    slidesPerView: 11,
    spaceBetween: 32,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    slideToClickedSlide: true,
    // Arrows
    navigation: {
      nextEl: '.trophies__arrow_next',
      prevEl: '.trophies__arrow_prev',
    },
    //pagination: {
    //  el: ".current-lineup__dotts",
    // clickable: true,
    //  type: "bullets",
    //},
    /*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
let sliderUnscrupulousAnalyst;
if (document.querySelector('.slider-unscrupulous-analyst__body')) {
  sliderUnscrupulousAnalyst = new Swiper('.slider-unscrupulous-analyst__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    //Arrows

    navigation: {
      nextEl: '.slider-unscrupulous-analyst__arrow_next',
      prevEl: '.slider-unscrupulous-analyst__arrow_prev',
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
let footerSliderAnalyst;
if (document.querySelector('.footer-slider-unscrupulous-analyst__body')) {
  footerSliderAnalyst = new Swiper('.footer-slider-unscrupulous-analyst__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    simulateTouch: false,
    navigation: {
      nextEl: '.footer-slider-unscrupulous-analyst__arrow_next',
      prevEl: '.footer-slider-unscrupulous-analyst__arrow_prev',
    },
    pagination: {
      el: '.footer-slider-unscrupulous-analyst__dotts',
      type: 'bullets',
      clickable: true,
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
if (document.querySelector('.footer-slider-unscrupulous-analyst__body') && document.querySelector('.slider-unscrupulous-analyst__body')) {
  sliderUnscrupulousAnalyst.controller.control = footerSliderAnalyst;
  footerSliderAnalyst.controller.control = sliderUnscrupulousAnalyst;
}
// ===================================================
const differencesSlider = document.querySelector('.streams__items');
if (differencesSlider) {
  let sliderOnePipe;
  function mobileSlider() {
    if (window.innerWidth <= 767.98 && differencesSlider.dataset.mobile == 'false') {
      differencesSlider.dataset.mobile = 'true';
      sliderOnePipe = new Swiper('.streams__items', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        //loop: true,
        //autoHeight: true,
        watchOverflow: true,
        simulateTouch: false,
        navigation: {
          nextEl: '.streams__arrow_next',
          prevEl: '.streams__arrow_prev',
        },
        pagination: {
          el: '.streams__dotts',
          type: 'bullets',
          clickable: true,
        },
        on: {
          lazyImageReady: function () {
            ibg();
          },
        },
      });
    }
    if (window.innerWidth > 767.98) {
      differencesSlider.dataset.mobile = 'false';

      if (differencesSlider.classList.contains('swiper-container-initialized')) {
        sliderOnePipe.destroy();
      }
    }
  }
  mobileSlider();
}
//========================================================================================================================================================
