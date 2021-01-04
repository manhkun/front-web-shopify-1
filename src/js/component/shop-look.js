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

var dotImage = Array.from(
  document.getElementsByClassName("shop-look__image--dot")
);

var paginationShopLook = Array.from(
  document.querySelectorAll(".look-pagination .swiper-pagination-bullet")
);

dotImage.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    paginationShopLook[index].click();
  });
});
