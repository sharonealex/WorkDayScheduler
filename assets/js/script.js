
//Create and display todays date and day in the specified moment format
var today = moment().format('dddd, MMM Do YYYY');
$("#thisDay").html(today);