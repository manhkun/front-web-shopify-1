import $ from "jquery";

$(document).scroll(function(evt) {
  var currentTop = $(this).scrollTop();
  if (currentTop >= 40) {
    console.log(currentTop);
    $(".navbar").addClass("sticky-navbar");
  } else {
    $(".navbar").removeClass("sticky-navbar");
  }
});
