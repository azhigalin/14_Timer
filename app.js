let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;

const timerContainer = document.querySelector(".timer-container");

timerContainer.addEventListener("click", () => {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
});

timerContainer.addEventListener("dblclick", () => {
  clearInterval(startInterval);
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  startInterval = null;
  document.querySelector("#timer-display").innerHTML = "00:00:00";
  flag = false;
});

function startTimer() {
  if (timeBegan === null) timeBegan = new Date();
  if (timeStopped !== null) stoppedDuration += new Date() - timeStopped;

  startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
  timeStopped = new Date();
  clearInterval(startInterval);
}

function clockRunning() {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
  let minutes = timeElapsed.getMinutes();
  let seconds = timeElapsed.getSeconds();
  let milliseconds = timeElapsed.getMilliseconds();

  milliseconds = Math.floor(milliseconds / 10);

  document.querySelector("#timer-display").innerHTML =
    (minutes = minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds = seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds);
}
