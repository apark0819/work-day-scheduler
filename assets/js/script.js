//Moment.js//
var today = moment();
console.log("today", today);
$("#currentDay").text(today.format("MMM Do, YYYY"));
