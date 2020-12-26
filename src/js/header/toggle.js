import $ from "jquery";

$(function() {
  $(".hamburger-menu").on("click", () => {
    $(".nav-list").addClass("open");
  });
  $(".close-btn").on("click", () => {
    $(".nav-list").removeClass("open");
  });

  $(".expand-skincare__btn").on("click", () => {
    $(".expand-skincare__btn").toggleClass("open");
    $(".nav-expand__skincare").toggleClass("open");
  });
  $(".expand-body__btn").on("click", () => {
    $(".expand-body__btn").toggleClass("open");
    $(".nav-expand__body").toggleClass("open");
  });
});
