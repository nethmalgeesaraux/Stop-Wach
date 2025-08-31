 let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timer = null;
    let running = false;

    function updateDisplay() {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      document.getElementById("time").innerText = `${h}:${m}:${s}`;
    }

    function start() {
      if (!running) {
        running = true;
        timer = setInterval(() => {
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
          updateDisplay();
        }, 1000);
      }
    }

    function stop() {
      clearInterval(timer);
      running = false;
    }

    function reset() {
      clearInterval(timer);
      running = false;
      hours = 0;
      minutes = 0;
      seconds = 0;
      updateDisplay();
    }

    updateDisplay();