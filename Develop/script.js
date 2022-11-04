
$(document).ready(function (event) {
    const workDayNotes = localStorage.getItem("workDayNotes");
    if (workDayNotes) {
        const parsedNotes = JSON.parse(workDayNotes);
        for (let i = 0; i < parsedNotes.length; i++) {
            console.log(parsedNotes[i])
            $()        }
    }
})


// adding current day
let current = moment().format("dddd, MMMM Do YYYY");
let newDate = document.getElementById("currentDay");
newDate.innerHTML = current;



// If/Else statement on Blocks for the past, present, future
let currentDate = moment().format("HH");

$(".time").each(function() {
    let time = $(this).attr("id").split("-")[1];


if (newDate == time) {
    $(this).addClass("present");
    $(this).children(".timeBlock").addClass("present");
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
    const note = $(this).siblings(".timeBlock").val();
    const id = $(this).parent().attr("id").split("-")[1];

    let workArray = [];
    const workDayNotes = localStorage.getItem("workDayNotes");
    if (workDayNotes) {
        workArray = JSON.parse(workDayNotes);
    };

    const saveNote = {
        id: id, 
        note: note
    };
    workArray.push(saveNote);
    localStorage.getItem("workDayNotes", JSON.stringify(workArray)); 
   
    
localStorage.setItem(saveInfo, info); 
});


// Data from local starage
$("#hour08 .timeBlock").val(localStorage.getItem("08"));
$("#hour09 .timeBlock").val(localStorage.getItem("09"));
$("#hour10 .timeBlock").val(localStorage.getItem("10"));
$("#hour11 .timeBlock").val(localStorage.getItem("11"));
$("#hour12 .timeBlock").val(localStorage.getItem("12"));
$("#hour01 .timeBlock").val(localStorage.getItem("01"));
$("#hour02 .timeBlock").val(localStorage.getItem("02"));
$("#hour03 .timeBlock").val(localStorage.getItem("05"));
$("#hour04 .timeBlock").val(localStorage.getItem("04"));
$("#hour05 .timeBlock").val(localStorage.getItem("05"));


