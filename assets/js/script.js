function getCurrentDate() {
    // get current date 
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
    var timeContainerElement = $(".container");

    // convert from 24 hours format to 12 hours format
    var availableTime = ""
    for (var i = startTime; i <= endTime; i++) {
        if (i <= 12) {
            availableTime = i + "AM";
        } else {
            var newTime = i - 12;
            availableTime = newTime + "PM";
        };

        // create page form element with P / Textarea / Button
        var timeFormElement = $("<form></form>")
            .addClass("row col-12 d-flex flex-wrap justify-content-center")

        var timeBlockPElement = $("<p></p>")
            .addClass("hour col-1")
            .css("text-align", "right")
            .attr("id", "hour-id-" + availableTime)
            timeBlockPElement.text([availableTime]);
            timeFormElement.append(timeBlockPElement);

        var timeDescriptionElement = $("<textarea></textarea>")
            .addClass("description col-8")
            // .css("text-align", "")
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
            .attr("type", "button")
            .attr("id", "button-id-" + availableTime).on("click", saveCalendar)
            .wrapInner('<i class="fa-solid fa-lock"></i>')
            timeFormElement.append(timeButtonElement);
            timeContainerElement.append(timeFormElement);
    };
};

function setCurrentDate(currentDate) { 
    // set current date to  jumbotron
    var currentDay = currentDate;
    currentDay = $("#currentDay").text(currentDate);
};

function saveCalendar( ) {
    // getting new input element
    var getButtonElementId = $(this).attr("id").split("button-id-")[1];
    var getTextareaContent = $(this).siblings(".description").val();

    // object to be store in the local storage
    var saveCalendarObj = {
        hour: getButtonElementId,
        description: getTextareaContent
    }
    
    // trying to retrieve saved data from local storage
    var savedCalendar = localStorage.getItem("calendar");
    savedCalendar = JSON.parse(savedCalendar);

    // create local storage data if case it does not exist
    if (!savedCalendar) {
        savedCalendar = [saveCalendarObj]; 
    } else {
        // if exist, then get the current data and convert to json
        savedCalendar.push(saveCalendarObj);
        
        for (var i = 0; i < savedCalendar.length; i++) {
            localStorage.setItem("calendar", JSON.stringify(savedCalendar[i]));
        }
    }
    // save the data to local storage
    localStorage.setItem("calendar", JSON.stringify(savedCalendar));
};

function loadCalendar() {
    // trying to retrieve saved data from local storage
    var savedCalendar = localStorage.getItem("calendar");
    savedCalendar = JSON.parse(savedCalendar);

    // loop through the local storage data and show results in DOM
    for (var i = 0; i < savedCalendar.length; i++) {
        var hour = savedCalendar[i].hour;
        var description = savedCalendar[i].description;
        $("#description-id-" + hour).val(description);
    }
};

function startCalendar() {
    // call the calendar function 
    var currentDate = getCurrentDate();
    var currentHour = getCurrentHour();
    createTimeRowElements(currentHour, 9, 18);
    setCurrentDate(currentDate);
};

startCalendar();
loadCalendar();