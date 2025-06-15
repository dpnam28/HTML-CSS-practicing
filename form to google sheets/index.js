const scriptURL =
  "https://script.google.com/macros/s/AKfycbxri-dBOOtAvG_FUDwwHike4ttJdYjmu0WD3BVtr5TBUsTsJYeEiK5NUOQR6lISh8M9/exec";
const form = document.forms["submit-to-google-sheet"];
const successfulPrompt = document.getElementById("success");
const inputText = document.querySelector(".form__input input");

let email = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  email
    ? fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(() => {
          successfulPrompt.innerHTML = "Thank you for subscribing!";
          setTimeout(() => {
            successfulPrompt.innerHTML = "";
          }, 5000);
          form.reset()
        })
        .catch((error) => console.error("Error!", error.message))
    : (successfulPrompt.innerHTML =
        "<span style='color: red;'>You need to enter you email to subscribe us!</span>");
});

inputText.onchange = (e) => {
  email = e.target.value;
};
