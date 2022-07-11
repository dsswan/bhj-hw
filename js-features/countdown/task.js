let timer = document.getElementById("timer");
let currentTime = parseInt(timer.textContent);

let timerId = setTimeout(function tick() {
  currentTime -= 1;
  if (currentTime !== 0) {
    timer.innerHTML = currentTime;
  } else {
    alert("Вы победили в конкурсе!");
    clearTimeout(timerId);
    return;
  }
  timerId = setTimeout(tick, 1000);
}, 1000);