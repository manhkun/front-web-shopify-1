import $ from "jquery";

$(function() {
  $(".hamburger-menu").on("click", () => {
    $(".nav-list__inner").addClass("is-expand");
  });
  $(".btn-nav__close").on("click", () => {
    $(".nav-list__inner").removeClass("is-expand");
  });
  $(".btn-nav--item__open").on("click", (e) => {
    $(".nav-list__inner--item").addClass("is-expand");
  });
  $(".btn-nav--item__close").on("click", () => {
    $(".nav-list__inner--item").removeClass("is-expand");
  });
});
