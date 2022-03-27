var endTime = 9;

function getCurrentDate() {
    // get current time
    var currentDate = moment().format("dddd, MMMM Do");
    return currentDate;
};

// function getCurrentBusinessHour() {
//     // get current business hours
//     var currentBusinessTime = moment().format("hA");
//     return currentBusinessTime;
// }

function createTimeRowElements() {
    var timeContainerElement = $(".row");

    for (var i = 0; i <= endTime; i++) {
        var timeFormElement = $("<form></form>")
            .addClass("col-10 d-flex flex-wrap justify-content-center")

        var timeBlockPElement = $("<p></p>")
            .addClass("time-block hour col-1")
            .css("text-align", "right")
            if (i <=3 ) {
                currentTime = i + 9;
                timeBlockPElement.attr("id", "hour-id-" + [currentTime])
                timeBlockPElement.text([currentTime]+"AM");
            } else {
                currentTime = i - 3;
                timeBlockPElement.attr("id", "hour-id-" + [currentTime])
                timeBlockPElement.text([currentTime]+ "PM");
            };
            timeFormElement.append(timeBlockPElement);

        var timeDescriptionElement = $("<input></input>")
            .addClass("description col-8")
            if (i <= 3) {
                currentTime = i + 9;
                timeDescriptionElement.attr("id", "description-id-" + [currentTime]);
            } else {
                currentTime = i - 3;
                timeDescriptionElement.attr("id", "description-id-" + [currentTime]);
            }
            timeFormElement.append(timeDescriptionElement);

        var timeButtonElement = $("<button></button>")
            .addClass("saveBtn col-1")
            if (i <= 3) {
                currentTime = i + 9;
                timeButtonElement.attr("id", "button-id-" + [currentTime]);
            } else {
                currentTime = i - 3;
                timeButtonElement.attr("id", "button-id-" + [currentTime]);
            }
            timeFormElement.append(timeButtonElement);
            timeContainerElement.append(timeFormElement);

    };
    // var timeBlockPElement =  $("#hour-id")
    console.log(timeContainerElement)
}

createTimeRowElements();

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