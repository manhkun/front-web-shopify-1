var navlist = document.querySelector(".nav-list__inner");
var hamburgerMenu = document.querySelector(".btn-hamburger-menu");
var closeNavBtn = document.querySelector(".btn-nav__close");
var openNavItemBtn = Array.from(
  document.getElementsByClassName("btn-nav--item__open")
);
var closeNavItemBtn = Array.from(
  document.getElementsByClassName("btn-nav--item__close")
);

hamburgerMenu.addEventListener("click", (e) => {
  navlist.classList.add("is-expand");
});

closeNavBtn.addEventListener("click", (e) => {
  navlist.classList.remove("is-expand");
});

openNavItemBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.parentElement.parentElement.classList.add("is-expand");
  });
});

closeNavItemBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.parentElement.parentElement.classList.remove("is-expand");
  });
});
