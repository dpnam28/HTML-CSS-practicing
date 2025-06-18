const formPass = document.querySelector('.pass')
const pass = document.querySelector(".pass__input");
const button = document.querySelector(".pass__btn");
const message = document.querySelector(".pass__message");
const checkBox = document.querySelector(".check");

checkBox.onclick = () => {
  pass.type === "password" ? (pass.type = "text") : (pass.type = "password");
};

pass.oninput = () => {
  let passLength = pass.value.length;
  passLength > 0
    ? (message.style.display = "block")
    : (message.style.display = "none");

  if (passLength < 4) {
    message.innerHTML = "Password is weak";
    formPass.style.borderColor = 'red';
    pass.style.color = 'red';
    message.style.color = 'red'
  } else if (passLength >= 6 && passLength < 8) {
    message.innerHTML = "Password is medium";
    formPass.style.borderColor = 'orange';
    pass.style.color = 'orange';
    message.style.color = 'orange'
  } else if (passLength >= 8) {
    message.innerHTML = "Password is strong";
    formPass.style.borderColor = 'lightgreen';
    pass.style.color = 'lightgreen';
    message.style.color = 'lightgreen'
  }
};
