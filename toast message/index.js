const button = document.getElementsByTagName("button");
const toastBox = document.getElementById("toastBox");

Array.from(button).forEach((btn) => {
  btn.onclick = function (e) {
    showToast(e.target.innerHTML);
  };
});

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  if (message === button[0].innerText) {
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style='color: #2aa92a;'></i> ${message}`;
  } else if (message === button[1].innerText) {
    toast.innerHTML = `<i class="fa-solid fa-circle-xmark" style='color: #ed5151;'></i> ${message}`;
  } else if (message === button[2].innerText) {
    toast.innerHTML = `<i class="fa-solid fa-circle-exclamation" style='color: #efef1f;'></i> ${message}`;
  }

  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove()
  }, 4000);
}
