const input = document.querySelector(".input__todo");
const btn = document.querySelector(".input__btn");
const list = document.querySelector(".list");
const notice = document.querySelector(".notice");

function addTask() {
  if (input.value === "") {
    notice.style = "display: block;";
  } else {
    notice.style = "display: none;";

    let li = document.createElement("li");
    let span = document.createElement("span");

    li.innerHTML = input.value;
    span.innerHTML = "\u00d7";

    list.appendChild(li);
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

input.addEventListener("blur", () => {
  notice.style = "display: none;";
});

input.addEventListener("input", () => {
  notice.style = "display: none;";
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function getData() {
  list.innerHTML = localStorage.getItem("data");
}

getData();
