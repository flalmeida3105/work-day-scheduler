function getCurrentDate() {
    // get current time
    var currentDate = moment().format("dddd, MMMM Do");
    return currentDate;
};

function setCurrentDateTime(currentDate) { 
    // set current date and time in the jumbotron
    var currentDay = currentDate;
    currentDay = $("#currentDay").text(currentDate);
};


function startCalendar() {
    // call the calendar function 
    var currentDate = getCurrentDate();
    setCurrentDateTime(currentDate);
};

startCalendar();