const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliseconds = document.getElementById("miliseconds");

// call the action  buttons and store it in a variables

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

//

// initialize the initial value of minutes,seconds and miliseconds
let milisec = 0;
let sec = 0;
let min = 0;

// initialize a variable to  get the  return value of setInterval func  so we can  stop the  stop the interval func
let interval = null;

// to check if the timer is running or not
let timerRunning = false;

// start function

const startFunc = () => {
  if (timerRunning) return;

  timerRunning = true;

  // increasing the timer values in every 10ms
  interval = setInterval(() => {
    //
    milisec += 10; // increasing the miliseconds value by 10 in every 10ms

    // so here if the milisec is equal to  1000 then we set the miniseconds to start from 0 and increasing the value of seconds by 1
    if (milisec === 1000) {
      milisec = 0;
      sec++;
    }

    // so here if the sec is equal to 60 then we set the seconds to start from 1 and increasing the value of minutes by 1
    if (sec === 60) {
      sec = 0;
      min++;
    }

    // so here if the min is equal to 60 then we reset the seconds and miliseconds by 0  and stop the watch
    if (min === 60) {
      resetFunc();
      return;
    }

    // here we inject the timer values in our ui
    miliseconds.textContent =
      (milisec < 10 ? "00" : milisec < 100 ? "0" : "") + milisec;
    seconds.textContent = (sec < 10 ? "0" : "") + sec;
    minutes.textContent = (min < 10 ? "0" : "") + min;

    //
  }, 10);
};

// pause function

const pauseFunc = () => {
  // pause the timer
  clearInterval(interval);

  timerRunning = false;
};

// reset function

const resetFunc = () => {
  clearInterval(interval);
  timerRunning = false;
  milisec = 0;
  sec = 0;
  min = 0;

  miliseconds.textContent = "000";
  seconds.textContent = "00";
  minutes.textContent = "00";
};
