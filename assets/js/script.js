var endTime = 9;
var endTime24Hours = 18;

function getCurrentDate() {
    // get current time
    var currentDate = moment().format("dddd, MMMM Do");
    return currentDate;
};

function getCurrentBusinessHour() {
    // get current business hours
    var currentBusinessTime = moment().format("HH");
    return currentBusinessTime;
};

function getCurrentTime() {
    for (var i = 9; i <= endTime24Hours; i++) {
        time24Hours = i;
        console.log(time24Hours);
    }
    return time24Hours;
};


function createTimeRowElements(currentBusinessTime, time24Hours) {
    var timeContainerElement = $(".row");

    for (var i = 0; i <= endTime; i++) {
        if (i <= 3) {
            currentTime = i + 9;
            currentTime = currentTime + "AM";
        } else {
            currentTime = i - 3;
            currentTime = currentTime + "PM";
        };

        var timeFormElement = $("<form></form>")
            .addClass("col-10 d-flex flex-wrap justify-content-center")

        var timeBlockPElement = $("<p></p>")
            .addClass("time-block hour col-1")
            .css("text-align", "right")
            timeBlockPElement.attr("id", "hour-id-" + [time24Hours])
            timeBlockPElement.text([currentTime]);
            timeFormElement.append(timeBlockPElement);

        var timeDescriptionElement = $("<input></input>")
            .addClass("description col-8")
            .attr("id", "description-id-" + [time24Hours]);
            
        console.log("Business TIme", currentBusinessTime, "Current 24 hours format", time24Hours);

            currentBusinessTime = 11;
             if (currentBusinessTime < time24Hours) {
                timeDescriptionElement.addClass("past");
            } 
            if (currentBusinessTime > time24Hours) {
                timeDescriptionElement.addClass("future");
            } 
            if (currentBusinessTime == time24Hours) {
                timeDescriptionElement.addClass("present");
            }

            timeFormElement.append(timeDescriptionElement);

        var timeButtonElement = $("<button></button>")
            .addClass("saveBtn col-1")
            .attr("id", "button-id-" + [time24Hours]);
            timeFormElement.append(timeButtonElement);
            timeContainerElement.append(timeFormElement);

    };
    // var timeBlockPElement =  $("#hour-id")
    console.log(timeContainerElement)
}

// createTimeRowElements();

function setCurrentDateTime(currentDate) { 
    // set current date and time in the jumbotron
    var currentDay = currentDate;
    currentDay = $("#currentDay").text(currentDate);
};


function startCalendar() {
    // call the calendar function 
    var currentDate = getCurrentDate();
    var currentBusinessTime = getCurrentBusinessHour();
    var time24Hours = getCurrentTime();
    createTimeRowElements(currentBusinessTime, time24Hours);
    setCurrentDateTime(currentDate);
};

startCalendar();