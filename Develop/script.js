
// adding current day
let current = moment().format("dddd, MMMM YYYY");
let newDate = document.getElementById("currentDay");
newDate.innerHTML = current;



// Blocks for the past, present, future
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

})
