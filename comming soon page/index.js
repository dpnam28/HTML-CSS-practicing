var countDown = new Date("Jun 25, 2025 00:00:00").getTime();

let time = setInterval(() => {
  let now = new Date().getTime();
  let deadline = countDown - now;

  let days = Math.floor(deadline / (1000 * 60 * 60 * 24));
  let hours = Math.floor((deadline % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((deadline % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((deadline % (1000 * 60)) / 1000);

  if (deadline > 0) {
    document.querySelector(".time__day").innerHTML = days;
    document.querySelector(".time__hour").innerHTML = hours;
    document.querySelector(".time__minute").innerHTML = minutes;
    document.querySelector(".time__second").innerHTML = seconds;
  } else {
    clearInterval(time);
  }
}, 1000);
