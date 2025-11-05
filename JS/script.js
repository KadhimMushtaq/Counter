function increase() {
  let counterElemenet = document.getElementById("counter__current-value");
  let increaseBtn = document.getElementById("counter__increase-btn");
  increaseBtn.addEventListener("click", function () {
    counterElemenet.textContent = Number(counterElemenet.textContent) + 1;
    counterElemenet.style.color = "#9bd6b8";
  });
}

function decrease() {
  let counterElemenet = document.getElementById("counter__current-value");
  let decreaseBtn = document.getElementById("counter__decrease-btn");
  decreaseBtn.addEventListener("click", function () {
    counterElemenet.textContent = Number(counterElemenet.textContent) - 1;
    counterElemenet.style.color = "#e85242";
  });
}

function reset() {
  let counterElemenet = document.getElementById("counter__current-value");
  let resetBtn = document.getElementById("counter__reset-btn");
  resetBtn.addEventListener("click", function () {
    counterElemenet.textContent = "0";
    counterElemenet.style.color = "black";
  });
}

increase();
decrease();
reset();
