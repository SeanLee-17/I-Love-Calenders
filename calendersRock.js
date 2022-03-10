var currentTimeEl = moment().format("MMM Do YYYY");
$("#currentDay").text(currentTimeEl);

var nineAmEl = $("#9AM");
var tenAmEl = $("#10AM");
var elevenAmEl = $("#11AM");
var twelvePmEl = $("#12PM");
var onePmEl = $("#1PM");
var twoPmEl = $("#2PM");
var threePmEl = $("#3PM");
var fourPmEl = $("#4PM");
var fivePmEl = $("#5PM");
var sixPmEl = $("#6PM");
var sevenPmEl = $("#7PM");
var eightPmEl = $("#8PM");
var saveBtnEl = $(".saveBtn");

function rowVal() {
  localStorage.setItem("9AM", nineAmEl.val());
  localStorage.setItem("10AM", tenAmEl.val());
  localStorage.setItem("11PM", elevenAmEl.val());
  localStorage.setItem("12PM", twelvePmEl.val());
  localStorage.setItem("1PM", onePmEl.val());
  localStorage.setItem("2PM", twoPmEl.val());
  localStorage.setItem("3PM", threePmEl.val());
  localStorage.setItem("4PM", fourPmEl.val());
  localStorage.setItem("5PM", fivePmEl.val());
  localStorage.setItem("6PM", sixPmEl.val());
  localStorage.setItem("7PM", sevenPmEl.val());
  localStorage.setItem("8PM", eightPmEl.val());
}

function getRowVal() {
  var text9am = localStorage.getItem("9AM");
  var text10am = localStorage.getItem("10AM");
  var text11am = localStorage.getItem("11AM");
  var text12pm = localStorage.getItem("12PM");
  var text1pm = localStorage.getItem("1PM");
  var text2pm = localStorage.getItem("2PM");
  var text3pm = localStorage.getItem("3PM");
  var text4pm = localStorage.getItem("4PM");
  var text5pm = localStorage.getItem("5PM");
  var text6pm = localStorage.getItem("6PM");
  var text7pm = localStorage.getItem("7PM");
  var text8pm = localStorage.getItem("8PM");

  nineAmEl.text(text9am);
  tenAmEl.text(text10am);
  elevenAmEl.text(text11am);
  twelvePmEl.text(text12pm);
  onePmEl.text(text1pm);
  twoPmEl.text(text2pm);
  threePmEl.text(text3pm);
  fourPmEl.text(text4pm);
  fivePmEl.text(text5pm);
  sixPmEl.text(text6pm);
  sevenPmEl.text(text7pm);
  eightPmEl.text(text8pm);
}

function hourCounter(hour) {
  var hourEl = moment().format("HH");
  var timeEl = hour.data("index");

  if (timeEl > hourEl) {
    $(hour).addClass("future");
  } else if (timeEl == hourEl) {
    $(hour).addClass("present");
  } else {
    $(hour).addClass("past");
  }
}

setInterval(() => {
  hourCounter(nineAmEl);
  hourCounter(tenAmEl);
  hourCounter(elevenAmEl);
  hourCounter(twelvePmEl);
  hourCounter(onePmEl);
  hourCounter(twoPmEl);
  hourCounter(threePmEl);
  hourCounter(fourPmEl);
  hourCounter(fivePmEl);
  hourCounter(sixPmEl);
  hourCounter(sevenPmEl);
  hourCounter(eightPmEl);
}, 60000);

getRowVal();
hourCounter(nineAmEl);
hourCounter(tenAmEl);
hourCounter(elevenAmEl);
hourCounter(twelvePmEl);
hourCounter(onePmEl);
hourCounter(twoPmEl);
hourCounter(threePmEl);
hourCounter(fourPmEl);
hourCounter(fivePmEl);
hourCounter(sixPmEl);
hourCounter(sevenPmEl);
hourCounter(eightPmEl);

saveBtnEl.on("click", function () {
  rowVal();
});
