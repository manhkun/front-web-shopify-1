import $ from "jquery";

$(function() {
  $("#products-nav__masques").on("click", () => {
    $("#products-nav__masques").addClass("nav-item__active");
    $("#products-nav__lips").removeClass("nav-item__active");
    $("#product-cards__masques").show();
    $("#product-cards__lips").hide();
  });

  $("#products-nav__lips").on("click", () => {
    $("#products-nav__lips").addClass("nav-item__active");
    $("#products-nav__masques").removeClass("nav-item__active");
    $("#product-cards__lips").show();
    $("#product-cards__masques").hide();
  });
});
