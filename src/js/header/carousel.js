import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import $ from "jquery";

Swiper.use([Navigation, Pagination, Autoplay]);

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
});

$(".swiper-slide").mousemove(() => {
  swiper.autoplay.stop();
});
$(".swiper-slide").mouseleave(() => {
  swiper.autoplay.start();
});
