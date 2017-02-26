// Define constant
const GENRES = ["action", "adventure", "comedy", "crime", "drama", "fantasy",
                  "history", "horror", "mystery", "music", "romance", "thriller"];
// Define an empty array to store movies
var movies = [];


// Take user input values from the form
function takeUserInput(){
  let title = getTitle(),
      year = getYear(),
      genres = getGenres(), //return array of selected genres
      ratings = getRating(); // return one selected rating
  createNewMovie(title, year, genres, ratings);
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
  let selectedGenres = [];
  GENRES.map(function(value) {
    if (document.querySelector(`.${value}:checked`)) {
      selectedGenres.push(value);
      document.querySelector(`.${value}`).checked = false;
    }
  });
  return selectedGenres;
}


// Collect user selected rating and clean user input afterwards
function getRating() {
  let selectedResult,
      ratingsForm = document.getElementById("ratings");
  for (let i = 0; i < ratingsForm.length; i++) {
    if (ratingsForm[i].checked) {
      selectedResult = ratingsForm[i].value;
      ratingsForm[i].checked = false;
      return selectedResult;
    }
  }
  return selectedResult;
}


// Create the Constructor Pattern
function Movie(title, year, genres, ratings) {
  this.title = title;
  this.year = year;
  this.genres = genres;
  this.ratings = ratings;
}


// Create a new movie object and push it to the array
function createNewMovie(title, year, genresResult, rating) {
  let film;
  film = new Movie(title, year, genresResult, rating);
  movies.push(film);
}


// Get a list of our movies
function listMovies() {
  console.log(movies);
}







