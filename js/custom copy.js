<script>
  var mySwiper = new Swiper ('#blog-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    grabCursor:true,
    a11y: false,
    spaceBetween: 28,
    allowTouchMove: true,
    navigation: {
      nextEl: '#blog-right-button',
      prevEl: '#blog-left-button',
    },
    breakpoints: {
      0: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1.1,
        slidesPerGroup:1,
        spaceBetween: 20,
      },
      480: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1.25,
        slidesPerGroup:1,
        spaceBetween: 25,
      },
      767: { /* when window >= 767px - webflow tablet */
        slidesPerView: 1.5,
        slidesPerGroup:1,
        spaceBetween: 25,
      },
      992: { /* when window >= 988px - webflow desktop */
        slidesPerView: 2.125,
        slidesPerGroup:1,
        spaceBetween: 25,
      }
    },
  });
</script>
<script>
$(document).ready(function() {
// Swiper: Slider
    new Swiper('.swiper-container', {
        loop: false,
 
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 32,
   breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView:  1.1,
      spaceBetween: 16
    },
    // when window width is >= 480px
    1024: {
      slidesPerView:  2.1,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 2.1,
      spaceBetween: 32
    }
  }
    });
    
});

</script>

<script>
  var mySwiper = new Swiper ('.blog-recent', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    grabCursor:true,
    a11y: false,
    spaceBetween: 28,
    allowTouchMove: true,
    navigation: {
      nextEl: '#recent-right-button',
      prevEl: '#recent-left-button',
    },
    breakpoints: {
      0: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 12,
      },
      480: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 12,
      },
      767: { /* when window >= 767px - webflow tablet */
        slidesPerView: 2,
        slidesPerGroup:1,
        spaceBetween: 12,
      },
      992: { /* when window >= 988px - webflow desktop */
        slidesPerView: 3,
        slidesPerGroup:1,
        spaceBetween: 12,
      }
    },
  });
</script>


<script>

$(document).ready(function() {
// Swiper: Slider
    new Swiper('.swiper-container2', {
        loop: true,
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
        slidesPerView: 1.1,
        paginationClickable: true,
        spaceBetween: 10,
   breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3.1,
      spaceBetween: 45
    }
  }
    });
    
});
</script>





<script>
$(document).ready(function() {
// Swiper: Slider
    new Swiper('.blog_slide', {
        loop: true,
 
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 32,
   breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
    });
    
});

</script>