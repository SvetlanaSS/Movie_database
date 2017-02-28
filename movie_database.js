// Take user input values from the form, create a new movie and show a list of our movies
function processUserInput() {
  // Take user input
  let title = getTitle(),
      year = getYear(),
      genres = getGenres(); //return array of selected genres
      ratings = getRating(); // return one selected rating
  // Create an object from user input
  let film = createNewMovie(title, year, genres, ratings);
  showListOfMovies(film);
}

// Get film title and clean user input afterwards
function getTitle() {
  let title = document.getElementById("title").value;
  document.getElementById("title").value = "";
  return title;
}


// Get year and clean user input afterwards
function getYear(){
  let year = document.getElementById("year").value;
  document.getElementById("year").value = "";
  return year;
}

// Collect user selected genres and clean user input afterwards
function getGenres() {
  let genres = ["action", "adventure", "comedy", "crime", "drama", "fantasy",
                "history", "horror", "mystery", "music", "romance", "thriller"],
      selectedGenres = [];
  genres.map(function(value) {
    if (document.querySelector(`.${value}:checked`)) {
      selectedGenres.push(value);
      document.querySelector(`.${value}`).checked = false;
    }
  });
  return selectedGenres;
}

// Collect user selected rating and clean user input afterwards
/*function getRating() {
  let selectedRating = [],
      ratingsForm = document.getElementById("ratings");
  for (let i = 0; i < ratingsForm.length; i++) {
    if (ratingsForm[i].checked) {
      selectedRating = ratingsForm[i].value;
      ratingsForm[i].checked = false;
      return selectedRating;
    }
  }
  return selectedRating;
}
*/


// Create the Constructor Pattern
function Movie(title, year, genres, ratings) {
  this.title = title;
  this.year = year;
  this.genres = genres;
  this.ratings = ratings;
}

// Now we can create the objects and push them to the movies
function createNewMovie(title, year, genres, ratings) {
  film = new Movie(title, year, genres, ratings);
  return film;
}

// Show the list of all movies
function showListOfMovies(film) {
  let showAllMovies = document.getElementById("show-all-movies"),
      line = document.createElement("tr"),
      ratingForm = document.getElementById("ratings");
  line.innerHTML = "<td>" + film.title + "</td><td>" + film.year +
  "</td><td>" + film.genres + "</td><td>" +   film.ratings + "</td><td>" + ratingForm.innerHTML +
  "<button onclick='getRating()'>Add</button></td>";
  showAllMovies.appendChild(line);
}

// Collect user selected rating and clean user input afterwards
function getRating() {
  let selectedRating = [],
      ratingsForm = document.getElementById("ratings");
  for (let i = 0; i < ratingsForm.length; i++) {
    if (ratingsForm[i].checked) {
      selectedRating.push(ratingsForm[i].value);
      ratingsForm[i].checked = false;
      return selectedRating;
    }
  }
  return selectedRating;
}

//
function rateMovie(film, ratings) {
  let showAllMovies = document.getElementById("show-all-movies");
  let selectedFilm = document.getElementsByClassName("selected");
  if(selectedFilm.checked) {

  }
}

//
// movies = [
//   {
//     title: 'Terminator',
//     year: 1991,
//     genres: [
//     'action',
//     'comedy',
//     'drama',
//     'fantasy',
//     'thriller'],
//     ratings: []
//   }
// ]
