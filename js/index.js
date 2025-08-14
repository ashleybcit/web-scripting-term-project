// HOMEPAGE - JQuery AUTOCOMLPETE Array Options -- UPDATE THIS!
$( function() {
    var availableTags = [
      "Get Out",
      "Hereditary",
      "It Follows",
      "Midsommar",
      "Us",
      "The Witch",
      "The Babadook",
      "Sinister",
      "The Conjuring",
      "It Follows",
      "The Descent",
      "The Ring",
      "The Others",
      "Insidious",
      "The Exorcist",
      "The Blair Witch Project",
      "A Quiet Place",
      "The Texas Chain Saw Massacre",
      "Candyman",
      "Smile",
      "Talk to Me",
      "The Invitation"
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

// HOMEPAGE - Top Picks Pop Up Animated Modal

$("#demo01").animatedModal();
