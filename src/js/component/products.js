import Swiper from "swiper";

const product_nav = ["MASQUES", "LIPS"];

var swiper = new Swiper(".swiper-container.product-slide__container", {
  pagination: {
    el: ".swiper-pagination.product-pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return (
        '<span class="mr-5 ' + className + '">' + product_nav[index] + "</span>"
      );
    },
  },
});

var konjacBtn = Array.from(
  document.getElementsByClassName("product-fatiguedskin__color--item")
);
var imgDisp = document.querySelector(".product-fatiguedskin__disp");

var getSiblings = function(elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

konjacBtn.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    item.classList.add("color-active");
    getSiblings(item).forEach((el) => {
      el.classList.remove("color-active");
    });
    if (index === 0) {
      imgDisp.setAttribute("src", "./images/product-fatigued1.jpg");
    } else if (index === 1) {
      imgDisp.setAttribute("src", "./images/product-fatigued2.jpg");
    } else if (index === 2) {
      imgDisp.setAttribute("src", "./images/product-fatigued3.jpg");
    }
  });
});
