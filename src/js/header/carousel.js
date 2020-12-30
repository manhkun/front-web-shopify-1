import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import $ from "jquery";
import anime from "animejs/lib/anime.es.js";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  on: {
    transitionStart: (swiper) => {
      console.log("slide change start - before");
      var tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 1500,
      });

      // Add children
      tl.add(
        {
          targets: ".swiper-slide-active .swiper-caption",
          translateY: 50,
          opacity: [1, 0],
        },
        "-=1000"
      );
    },
    transitionEnd: (swiper) => {
      console.log("slide change end");
      var tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 1500,
      });
      tl.add({
        targets: ".swiper-slide-active .swiper-caption",
        translateY: -50,
        delay: anime.stagger(100),
        opacity: [0, 1],
      });
    },
  },
});

$(".swiper-slide").mousemove(() => {
  swiper.autoplay.stop();
});
$(".swiper-slide").mouseleave(() => {
  swiper.autoplay.start();
});
