import $ from "jquery";
import anime from "animejs/lib/anime.es.js";

$(function() {
  $("#products-nav__masques").on("click", () => {
    $("#products-nav__masques").addClass("nav-item__active");
    $("#products-nav__lips").removeClass("nav-item__active");
    $("#product-cards__masques").addClass("isactive");
    $("#product-cards__lips").removeClass("isactive");
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 1500,
    });

    // Add children
    tl.add({
      targets: ".product-cards.isactive",
      opacity: [0, 1],
    });
  });

  $("#products-nav__lips").on("click", () => {
    $("#products-nav__lips").addClass("nav-item__active");
    $("#products-nav__masques").removeClass("nav-item__active");
    $("#product-cards__lips").addClass("isactive");
    $("#product-cards__masques").removeClass("isactive");
  });
  $("#pure-konjac").on("click", function(e) {
    $(this).addClass("color-active");
    $(this)
      .siblings()
      .removeClass("color-active");
    $(".product-fatiguedskin__disp").attr(
      "src",
      "./images/product-fatigued1.jpg"
    );
    $(".product-fatiguedskin__colors--name").html("Color: Bamboo Charcoal");
  });
  $("#bamboo-charcoal").on("click", function(e) {
    $(this).addClass("color-active");
    $(this)
      .siblings()
      .removeClass("color-active");
    $(".product-fatiguedskin__disp").attr(
      "src",
      "./images/product-fatigued2.jpg"
    );
    $(".product-fatiguedskin__colors--name").html("Color: Pink Clay");
  });
  $("#pink-clay").on("click", function(e) {
    $(this).addClass("color-active");
    $(this)
      .siblings()
      .removeClass("color-active");
    $(".product-fatiguedskin__disp").attr(
      "src",
      "./images/product-fatigued3.jpg"
    );
    $(".product-fatiguedskin__colors--name").html("Color: Pure Konjac");
  });
});
