let counter = document.getElementById("clicker__counter"),
  cookie = document.getElementById("cookie"),
  score = parseInt(counter.textContent);

cookie.onclick = function () {
  score += 1;
  counter.innerHTML = score;
  cookie.style.width = score % 2 ? "250px" : "200px";
};