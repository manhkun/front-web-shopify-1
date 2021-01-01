import Swiper, { EffectFade } from "swiper";

Swiper.use([Swiper, EffectFade]);

var swiper = new Swiper(".swiper-container.look-slide__container", {
  simulateTouch: false,
  pagination: {
    el: ".swiper-pagination.look-pagination",
    clickable: true,
  },
  effect: "fade",
});
