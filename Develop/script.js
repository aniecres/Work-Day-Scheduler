
// adding current day
let current = moment().format("dddd, MMMM YYYY");
let newDate = document.getElementById("currentDay");
newDate.innerHTML = current;



// If/Else statement on Blocks for the past, present, future
let currentDate = moment().format("HH");

$(".time").each(function() {
    let time = $(this).attr("id").split("-")[1];


if (currentDate == time) {
    $(this).addClass("present");
    $(this).children(".time-block").addClass("present");
}  else if (currentDate < time) {
    $(this).removeClass("present");
    $(this).addClass("future");
}  else if (currentDate > time) {
    $(this).removeClass("future");
    $(this).addClass("past");
}

});

// Saving data to the local storage 
$(".save").click(function (event) {
    event.preventDefault();
    let saveInfo = $(this).siblings(".time-block").val();
    let info = $(this).parent().attr("id").split("-")[1];
localStorage.setItem(saveInfo, info); 
});

// Data from local starage
$("#hour08 .time-block").val(localStorage.getItem("08"));
$("#hour09 .time-block").val(localStorage.getItem("09"));
$("#hour10 .time-block").val(localStorage.getItem("10"));
$("#hour11 .time-block").val(localStorage.getItem("11"));
$("#hour12 .time-block").val(localStorage.getItem("12"));
$("#hour01 .time-block").val(localStorage.getItem("01"));
$("#hour02 .time-block").val(localStorage.getItem("02"));
$("#hour03 .time-block").val(localStorage.getItem("05"));
$("#hour04 .time-block").val(localStorage.getItem("04"));
$("#hour05 .time-block").val(localStorage.getItem("08"));


