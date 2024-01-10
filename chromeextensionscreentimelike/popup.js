document.addEventListener('DOMContentLoaded', function () {
    // Function to send a message to the background script to set the timer
    function setTimer() {
        const timerInput = document.getElementById('timerInput');
        const duration = parseInt(timerInput.value, 10);

        // Send a message to the background script to set the timer
        chrome.runtime.sendMessage({ setTimer: true, duration: duration }, function (response) {
            console.log(response.message);
        });
    }

    // Attach the setTimer function to the button click event
    document.getElementById('timerForm').addEventListener('submit', function (event) {
        event.preventDefault();
        setTimer();
    });
});