var currentTimeEl = moment().format("MMM Do YYYY");
$("#currentDay").text(currentTimeEl);

var hourEl = moment().format("H");

var now = hourEl;
//var past = currentTimeEl > pastTimeEl;
//var future = currentTimeEl < pastTimeEl;

//console.log(past);
console.log(now);
console.log(hourEl);
//console.log(future);

function nowColor() {
  if (now == hourEl) {
    document.getElementsByClassName("color").style.backgroundColor = "green";
  } else if (now < hourEl) {
    document.getElementsByClassName("color").style.backgroundColor = "gold";
  } else {
    document.getElementsByClassName("color").style.backgroundColor = "gray";
  }
}
