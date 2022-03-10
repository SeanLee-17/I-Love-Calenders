var currentTimeEl = moment().format("MMM Do YYYY");
$("#currentDay").text(currentTimeEl);

var hourEl = moment().format("h");
console.log(hourEl);

var rowsEl = document.getElementsByClassName("description");
console.log(rowsEl);

function hourCounter() {
  if (hourEl >= 9) {
    if (hourEl === 9) {
      rowsEl[0].setAttribute("style", "background-color: red;");
    } else if (hourEl === 10) {
      rowsEl[0].setAttribute("style", "background-color: red;");
    } else if (hourEl === 11) {
      rowsEl[0].setAttribute("style", "background-color: red;");
    } else if (hourEl === 12) {
      rowsEl[0].setAttribute("style", "background-color: red;");
    }
  } else if (hourEl > 9) {
  }
}
