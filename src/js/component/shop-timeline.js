import Swiper from "swiper";

const timeline_nav = ["STORY", "INSPIRED", "QUALITY"];

var swiper = new Swiper(".swiper-container.timeline-slide__container", {
  pagination: {
    el: ".swiper-pagination.timeline-pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return (
        '<span class="mr-5 ' +
        className +
        '">' +
        timeline_nav[index] +
        "</span>"
      );
    },
  },
});
