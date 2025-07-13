const list = document.querySelector(".list");
const chosen = document.querySelector(".chosen");
const dropdown = document.querySelector(".drop-down");
const arrow = document.querySelector("#arrow");

list.onclick = (e) => {
  chosen.textContent = e.target.innerText;
};

dropdown.onclick = () => {
  list.classList.toggle("disable");
  arrow.classList.toggle("rotate");
};
