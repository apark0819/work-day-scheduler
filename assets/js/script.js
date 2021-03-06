//Moment.js//
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
$("#currentHour").text(today.format("h:mm a"));


//var elements
var saveBtn = $(".save-icon");
var containerEl = $(".container");
var nineAM = $("#9AM");
var tenAM = $("#10AM");
var elevenAM = $("#11AM");
var twelvePM = $("#12PM");
var onePM = $("#1PM");
var twoPM = $("#2PM");
var threePM = $("#3PM");
var fourPM = $("#4PM");
var fivePM = $("#5PM");

var dailySchedule = [
    nineAM,
    tenAM,
    elevenAM,
    twelvePM,
    onePM,
    twoPM,
    threePM,
    fourPM,
    fivePM,
];

//Schedule Blocking//
function showTimeColor(){
var today = moment().format("ii");
for (var i = 0; i < dailySchedule.length; i++) {
    dailySchedule[i].removeClass("future past present");
    if (today > dailySchedule[i].data("hour")) {
        dailySchedule[i].addClass("past");
    } else if (today === dailySchedule[i].attr("data-hour")) {
        dailySchedule[i].addClass("present");
    } else {
        dailySchedule[i].addClass("future");
    }
}
}

showTimeColor();
setInterval(showTimeColor, 10000); 



$(".saveBttn").on("click", function(){
    userInput = $(this).siblings(".form-control").val();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

