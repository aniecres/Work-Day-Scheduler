// adding current day
// const date = new Date;
// console.log(date);

let current = moment().format("dddd, MMMM, YYYY");
let newDate = document.getElementById("currentDay");
newDate.innerHTML = current;


// Blocks for the past, present, future


