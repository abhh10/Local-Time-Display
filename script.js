const timer = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    timer.innerHTML = date.toLocaleTimeString();
}, 1000)

// This code updates the content of an HTML element with the ID 'clock' every second to display the current time in a localized format.
// It uses the setInterval function to repeatedly execute a function that retrieves the current time and formats it using toLocaleTimeString.
// The timer will show the time in the user's local timezone and format.
// Make sure to have an element with id 'clock' in your HTML for this to work