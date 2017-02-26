// Define constans
const GENRES = ["action", "adventure", "comedy", "crime", "drama", "fantasy",
                  "history", "horror", "mystery", "music", "romance", "thriller"],
      RATINGS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// A Function that takes user input values from the form
function takeUserInput() {
  let title = document.getElementById("title").value,
      year = document.getElementById("year").value,
      genres = getGenres(),
      ratings = getRating();
  console.log("title:", title);
  console.log("year:", year);
  console.log("genres:", genres);
  console.log("ratings:", ratings);
}

// A Function that collects user selected genres
function getGenres() {
  let selectedGenres = [];
  GENRES.map(function(value) {
    if (document.querySelector(`.${value}:checked`)) {
      selectedGenres.push(value);
    }
  });
  return selectedGenres;
}

// A Function that collects user selected rating
function getRating() {
  let selectedResult,
      ratingsForm = document.getElementById("ratings");
  for (let i = 0; i < ratingsForm.length; i++) {
    if (ratingsForm[i].checked) {
      selectedResult = ratingsForm[i].value;
      return selectedResult;
    }
  }
  return selectedResult;
}


// A Function for creating new movies objects
function createMovie(title, year, genres, ratings) {
  this.title = title;
  this.year = year;
  this.genres = genres;
  this.ratings = ratings;
}





