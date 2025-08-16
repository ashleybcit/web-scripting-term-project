// HOMEPAGE - JQuery AUTOCOMLPETE Array Options

// When the user starts typing a movie name, this displays suggestions from the array below using jQuery UI Autocomplete.
$( function() {
    var availableTags = [
    "A Quiet Place",
    "Alien",
    "Annabelle",
    "The Babadook",
    "Barbarian",
    "The Blair Witch Project",
    "Candyman",
    "Carrie",
    "The Conjuring",
    "Coraline",
    "Crimson Peak",
    "Cube",
    "Dead Silence",
    "The Descent",
    "Drag Me to Hell",
    "Evil Dead",
    "Evil Dead Rise",
    "Event Horizon",
    "Final Destination",
    "Friday the 13th",
    "Get Out",
    "The Grudge",
    "Halloween",
    "Hereditary",
    "Host",
    "House of 1000 Corpses",
    "Insidious",
    "It",
    "It Follows",
    "Jennifer's Body",
    "The Lighthouse",
    "Lights Out",
    "Mama",
    "Midsommar",
    "The Mist",
    "The Nun",
    "The Others",
    "Paranormal Activity",
    "Pearl",
    "Pet Sematary",
    "Psycho",
    "The Ring",
    "Rosemary's Baby",
    "The Shining",
    "Sinister",
    "Skinamarink",
    "Smile",
    "Suspiria",
    "Talk to Me",
    "Terrifier",
    "Texas Chainsaw Massacre",
    "Train to Busan",
    "Us",
    "The Visit",
    "The VVitch",
    "The Wailing",
    "Wrong Turn",
    "X",
    "28 Days Later",
    "1408"
  ];

  // Targets the form input that has the ID “tags” and enables autocomplete using the above array as the autocomplete reference information.
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });

// HOMEPAGE - Flickity Photos for Top Picks

// This creates an image slider using Flickity.
$('.picks-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 2000,
  prevNextButtons: false
});

// HOMEPAGE - Submit movie and load results page

// Looks for an element with the ID of movieform and then assigns an event listener to the submit button.  
document.getElementById("movieForm").addEventListener("submit", function(e) {
  // Prevents the form from reloading the page when it's submitted.
  e.preventDefault();

  // Retrieves the input value from the element with ID “tags” and trims whitespace.
  const movieTitle = document.getElementById("tags").value.trim();

  // If a title is entered, the value is stored in localStorage under “selectedMovie”
  if (movieTitle) {
    localStorage.setItem("selectedMovie", movieTitle);
    // This sends the user to the results page.
    window.location.href = "results.html";
  }
});
