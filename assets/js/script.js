var startTime = 0;
// var endTime = 9;

function getCurrentDate() {
    // get current time
    var currentDate = moment().format("dddd, MMMM Do");
    return currentDate;
};

// function getCurrentBusinessHour() {
//     // get current business hours
//     var currentTime = moment().format("hA");
//     return currentTime;
// }

function createTimeRowElements() {
    var timeRowElements = $(".time-block");

    console.log(timeRowElements)
}

function setCurrentDateTime(currentDate) { 
    // set current date and time in the jumbotron
    var currentDay = currentDate;
    currentDay = $("#currentDay").text(currentDate);
};


function startCalendar() {
    // call the calendar function 
    var currentDate = getCurrentDate();
    // var currentBusinessTime = getCurrentBusinessHour();
    // createTimeRowElements(currentBusinessTime);
    setCurrentDateTime(currentDate);
};

startCalendar();