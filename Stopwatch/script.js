// Get references to the start/stop and reset buttons
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize timer variables
let seconds = 0;
let minutes = 0;
let hours = 0;

// Initialize leading zero variables for display
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Initialize timer-related variables
let timeInterval = null; // Used to store the setInterval reference
let timerStatus = "stopped"; // Indicates whether the timer is currently running or stopped

// Function to update the stopwatch and display
function stopwatch() {
    // Increment seconds
    seconds++;

    // Check if a minute has passed
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        // Check if an hour has passed
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // Format seconds, minutes, and hours with leading zeros if needed
    leadingSeconds = (seconds < 10) ? `0${seconds}` : seconds;
    leadingMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    leadingHours = (hours < 10) ? `0${hours}` : hours;

    // Update the display with the formatted time
    document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// Event listener for the start/stop button
startStopBtn.addEventListener('click', function(){
    // Check the current timer status
    if(timerStatus === 'stopped'){
        // If the timer is stopped, start it
        timeInterval = window.setInterval(stopwatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause id="pause"></i>`;
        timerStatus = 'started'; // Update the timer status
    } else {
        // If the timer is running, pause it
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play id="play"></i>`;
        timerStatus = 'stopped'; // Update the timer status
    }
});

// Event listener for the reset button
resetBtn.addEventListener('click', function(){
    // Stop the timer and reset variables
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00"; // Reset the display
});
