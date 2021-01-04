var navbar = document.querySelector(".navbar");

document.addEventListener("scroll", function(e) {
  if (window.scrollY >= 40) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
});
