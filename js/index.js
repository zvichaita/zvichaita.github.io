function getInspirationalMessage() {
  var url = "https://quotes.rest/qod?category=inspire"; // API endpoint for inspirational quotes

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var quote = data.contents.quotes[0].quote;
      var author = data.contents.quotes[0].author;
      var message = quote + " - " + author;
      console.log(message); // Output the inspirational message to the console
    })
    .catch(function(error) {
      console.log("Unable to fetch an inspirational message at the moment.", error);
    });
}

// Example usage
getInspirationalMessage();
