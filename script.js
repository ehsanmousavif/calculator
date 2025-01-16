const showDisplay = document.querySelector(".display");
const btn = document.querySelectorAll(".show-display");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".clear-last");
const equal = document.querySelector(".calculate");
//show result
function showResult(event) {
  const x = event.target.innerText;
  if (showDisplay.innerHTML == 0) {
    showDisplay.innerText = x;
  } else {
    showDisplay.innerHTML += x;
  }
}
function calculate() {
  const result = showDisplay.innerHTML;
  showDisplay.innerHTML = eval(result);
}
function clearNumbers() {
  if (showDisplay.innerHTML.length <= 2) {
    showDisplay.innerHTML = 0;
  } else {
  return  showDisplay.innerHTML.substring(0, showDisplay.innerHTML.length - 1);
  }
}
function clearAllNumbers(){
    return showDisplay.innerHTML=0;
}
btn.forEach((items) => {
  return items.addEventListener("click", showResult);
});

equal.addEventListener("click", calculate);
clearLast.addEventListener("click", clearNumbers);
clearAll.addEventListener("click", clearAllNumbers);
