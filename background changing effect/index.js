const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const wrapImg = document.getElementById("wrap-img");
const arrow = document.getElementById("arrow");

wrapImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;
imgBox.onmousemove = (e) => {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  arrow.style.left = boxWidth;
};
