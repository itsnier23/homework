let changeImg = document.getElementById("bulb-img");

let changeHeading = document.getElementById("main-heading");

function turnOn() {
  changeImg.src = "light-on.png"
  changeHeading.innerHTML = "turn the bulb off";
}

function turnOff() {
  changeImg.src = "light-off.png"
  changeHeading.innerHTML = "turn the bulb on";
}