// adding current day
// const date = new Date;
// console.log(date);

let current = moment().format("dddd, MMMM YYYY");
let newDate = document.getElementById("currentDay");
newDate.innerHTML = current;
let currentDate = moment().format("HH");


// Blocks for the past, present, future
$(".time-div").each(function() {
    let timeDiv = $(this).attr("id").split("-")[1];
})

