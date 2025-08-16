// These variables target elements used to display results from the movie input form on the index page.
const movieTitle = localStorage.getItem("selectedMovie");
const resultsContainer = document.querySelector(".results-container");

// This checks to see if a movie was inputted into the form on the homepage. If not, it displays a "No movie selected" message.
if (!movieTitle) {
  resultsContainer.innerHTML = "<p>No movie selected. Go back and try again.</p>";
} else {
// If a movie is selected, it fetches the OMDb API to check the movie title against the API database.
  fetch(`https://www.omdbapi.com/?apikey=4f04db72&t=${encodeURIComponent(movieTitle)}`)
    .then(response => response.json())
    .then(data => {
      console.log("OMDb API response:", data);
      // If the movie title matches a title in the database, it will display the selected data in the results container.
      if (data.Response === "True") {
        displayMovie(data);
      } else {
        resultsContainer.innerHTML = `<p>Movie not found: "${movieTitle}".</p>`;
        // If the movie title doesn't match any movie in the database, it will display a "movie not found" message.
      }
    })
    // This catches any errors that happen during the fetch process and logs them to the console.
    .catch(err => {
      console.error("Fetch error:", err);
    });
}

// This function creates elements to display the found movie data.
function displayMovie(movie) {
  // This creates a new div element.
  const card = document.createElement("div");
  // This adds the class "movie-card" to the new div.
  card.classList.add("movie-card");

  // This sets the inner HTML of the card with the movie’s poster, title, release year, country, rating, genre, and plot.
  card.innerHTML = `
    <img src="${movie.Poster}" alt="${movie.Title}">
    <h1>${movie.Title}</h1>
    <h2>${movie.Genre}</h2>
    <h3>Released: ${movie.Year} | Rated: ${movie.Rated} | Length: ${movie.Runtime} | Country: ${movie.Country}</h3>
    <p>${movie.Plot}</p>
  `;

  // This adds the newly created movie card to the results container on the page, making it visible to the user.
  resultsContainer.appendChild(card);
}