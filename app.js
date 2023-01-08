let options = {
  timeBegan: null,
  timeStopped: null,
  stoppedDuration: 0,
  startInterval: null,
  flag: false,
};
const timerContainer = document.querySelector(".timer-container");

timerContainer.addEventListener("click", () => {
  if (!options.flag) {
    startTimer();
    options.flag = true;
  } else {
    stopTimer();
    options.flag = false;
  }
});

timerContainer.addEventListener("dblclick", () => {
  clearInterval(options.startInterval);
  options.timeBegan = null;
  options.timeStopped = null;
  options.stoppedDuration = 0;
  options.startInterval = null;
  document.querySelector("#timer-display").innerHTML = "00:00:00";
  options.flag = false;
});

function startTimer() {
  if (options.timeBegan === null) options.timeBegan = new Date();
  if (options.timeStopped !== null)
    options.stoppedDuration += new Date() - options.timeStopped;

  options.startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
  options.timeStopped = new Date();
  clearInterval(options.startInterval);
}

function clockRunning() {
  let currentTime = new Date(),
    timeElapsed = new Date(
      currentTime - options.timeBegan - options.stoppedDuration
    ),
    minutes = timeElapsed.getMinutes(),
    seconds = timeElapsed.getSeconds(),
    milliseconds = timeElapsed.getMilliseconds();

  milliseconds = Math.floor(milliseconds / 10);

  document.querySelector("#timer-display").innerHTML =
    (minutes = minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds = seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds);
}
