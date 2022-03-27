function getCurrentDate() {
    // get current time and add to Jumbotron
    var currentDate = moment().format("dddd, MMMM Do");
    return currentDate;
};

function getCurrentHour() {
    // get current hour in 24 hours format
    var currentBusinessTime = moment().format("H");
    return currentBusinessTime;
};


function createTimeRowElements(currentHour, startTime, endTime) {
    // create page elements 
    var timeContainerElement = $(".row");

    // convert 24 hours format to 12 hours format
    var availableTime = ""
    for (var i = startTime; i <= endTime; i++) {
        if (i <= 12) {
            availableTime = i + "AM";
        } else {
            var newTime = i - 12;
            availableTime = newTime + "PM";
        };

        // create page form element with P / Input / Button
        var timeFormElement = $("<form></form>")
            .addClass("col-10 d-flex flex-wrap justify-content-center")

        var timeBlockPElement = $("<p></p>")
            .addClass("time-block hour col-1")
            .css("text-align", "right")
        timeBlockPElement.attr("id", "hour-id-" + availableTime)
            timeBlockPElement.text([availableTime]);
            timeFormElement.append(timeBlockPElement);

        var timeDescriptionElement = $("<input></input>")
            .addClass("description col-8")
            .attr("id", "description-id-" + availableTime);
        
        // compares the current hour with available time and add classes as needed
        if (currentHour == i) {
            timeDescriptionElement.addClass("present");
        } 
        if (i < currentHour) {
            timeDescriptionElement.addClass("past");
        } 
        if (i > currentHour) {
            timeDescriptionElement.addClass("future");
        }
        
        timeFormElement.append(timeDescriptionElement);

        var timeButtonElement = $("<button></button>")
            .addClass("saveBtn col-1")
            .attr("id", "button-id-" + availableTime);
            timeFormElement.append(timeButtonElement);
            timeContainerElement.append(timeFormElement);
        
    };
        // console.log(timeContainerElement)
}

function setCurrentDate(currentDate) { 
    // set current date to  jumbotron
    var currentDay = currentDate;
    currentDay = $("#currentDay").text(currentDate);
};


function startCalendar() {
    // call the calendar function 
    var currentDate = getCurrentDate();
    var currentHour = getCurrentHour();
    createTimeRowElements(currentHour, 9, 18);
    setCurrentDate(currentDate);
};

startCalendar();