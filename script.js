let screen = document.getElementById("screen");

function addToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  let result = eval(screen.value);
  screen.value = result;
}