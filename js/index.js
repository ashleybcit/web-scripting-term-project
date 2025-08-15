// HOMEPAGE - JQuery AUTOCOMLPETE Array Options -- UPDATE THIS!
$( function() {
    var availableTags = [
      "A Quiet Place",
      "Candyman",
      "Get Out",
      "Hereditary",
      "Insidious",
      "It Follows",
      "Midsommar",
      "Sinister",
      "Smile",
      "Talk to Me",
      "The Babadook",
      "The Blair Witch Project",
      "The Conjuring",
      "The Descent",
      "The Exorcist",
      "The Invitation",
      "The Others",
      "The Ring",
      "The Texas Chain Saw Massacre",
      "The Witch",
      "Us"
    ];
    
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

// HOMEPAGE - Flickity Photos for Top Picks
$('.picks-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 2000,
  prevNextButtons: false
});

// HOMEPAGE - Submit movie and load results page
document.getElementById("movieForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const movieTitle = document.getElementById("tags").value.trim();

  if (movieTitle) {
    localStorage.setItem("selectedMovie", movieTitle);
    window.location.href = "results.html";
  }
});
