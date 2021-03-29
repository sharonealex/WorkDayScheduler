//initialize and declare variables
var today = moment().format('dddd, MMM Do YYYY');
var hourNow = moment().hour();
var hourBlock;


//Create and display todays date and day in the specified moment format

$("#thisDay").html(today);

//Function to get current hour eg.8 am, 9am

function timeTracker(){

    $(".hour").each(function(){
        
        //hourBlock = parseInt($(this).text().split(" ")[0]);
        hourBlock = parseInt($(this).attr("id"));

        //Based on time of the hour, change background colour to inidicate past present future.
        if(hourBlock < hourNow){
            $(this).siblings(".description").addClass("past");
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").removeClass("future");
        }
        else if(hourBlock == hourNow){
            $(this).siblings(".description").addClass("present");
            $(this).siblings(".description").removeClass("past");
            $(this).siblings(".description").removeClass("future");
        }
        else {
            $(this).siblings(".description").addClass("future");
            $(this).siblings(".description").removeClass("present");
            $(this).siblings(".description").removeClass("past");
        }
    })

}


timeTracker();


//fetch and display saved tasks from local storage.

//Function for saving tasks on clicking button event.

//Function to change background colours based on time hours

