const movieTitle = localStorage.getItem("selectedMovie");
console.log("Stored movie title:", movieTitle);

const resultsContainer = document.querySelector(".results-container");

// OMDb API Response
if (!movieTitle) {
  resultsContainer.innerHTML = "<p>No movie selected. Go back and try again.</p>";
} else {
  fetch(`https://www.omdbapi.com/?apikey=4f04db72&t=${encodeURIComponent(movieTitle)}`)
    .then(response => response.json())
    .then(data => {
      console.log("OMDb API response:", data); // ← Add this
      if (data.Response === "True") {
        displayMovie(data);
      } else {
        resultsContainer.innerHTML = `<p>Movie not found: "${movieTitle}".</p>`;
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
    });
}

function displayMovie(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <img src="${movie.Poster}" alt="${movie.Title}">
    <h1>${movie.Title}</h1>
    <h2>${movie.Year} | ${movie.Country} | Rated ${movie.Rated}</h2>
    <h3>${movie.Genre}</h3>
    <p>${movie.Plot}</p>
  `;

  resultsContainer.appendChild(card);
}