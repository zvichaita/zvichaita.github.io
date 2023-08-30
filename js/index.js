function countdown() {
      // Set the target date for the countdown (August 27, 2028 00:00:00)
      var targetDate = new Date("August 27, 2028 00:00:00").getTime();

      // Update the countdown every second
      var countdownInterval = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the remaining time in milliseconds
        var remainingTime = targetDate - now;

        // Calculate the remaining time in days, hours, minutes, and seconds
        var totalSeconds = Math.floor(remainingTime / 1000);
        var days = Math.floor(totalSeconds / (24 * 60 * 60));
        var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        var minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        var seconds = totalSeconds % 60;

        // Display the remaining time
        var countdownDisplay =
          days +
          " days, " +
          hours +
          " hours, " +
          minutes +
          " minutes, " +
          seconds +
          " seconds of suffering left";

        document.getElementById("countdown-timer").textContent = countdownDisplay;

        // Stop the countdown when the target date is reached
        if (remainingTime <= 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown-timer").textContent = "Countdown completed.";
        }
      }, 1000);
    }

    // Call the countdown function when the page has finished loading
    window.onload = countdown;
