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
            $(this).children(".description").addClass("past");
            $(this).children(".description").removeClass("present");
            $(this).children(".description").removeClass("future");
        }
        else if(hourBlock == hourNow){
            $(this).children(".description").addClass("present");
            $(this).children(".description").removeClass("past");
            $(this).children(".description").removeClass("future");
        }
        else {
            $(this).children(".description").addClass("future");
            $(this).children(".description").removeClass("present");
            $(this).children(".description").removeClass("past");
        }
    })

}


//fetch and display saved tasks from local storage.

function displayTasks(){
    $("#id")
}


//Function for saving tasks on clicking button event.

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var task = $(this).siblings(".description").val();
        var taskTime = $(this).parent().attr("id")
        localStorage.setItem(taskTime, task);
    })
})

//Function to change background colours based on time hours

timeTracker();
displayTasks();