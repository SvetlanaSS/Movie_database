// Take user input values from the form, create a new movie and show a list of our movies
function processUserInput(){
  let title = getTitle(),
      year = getYear(),
      genres = getGenres(), //return array of selected genres
      ratings = getRating(); // return one selected rating
  createNewMovie(title, year, genres, ratings);
  showListOfMovies(title, year, genres, ratings);
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

// Now we can create the objects and push them to the movies
function createNewMovie(title, year, genres, ratings) {
  // Define an empty array to store movies
  // let movies = [];
  film = new Movie(title, year, genres, ratings);
  // movies.push(film);
}

// Show the list of all movies
function showListOfMovies (film) {
  let showAllMovies = document.getElementById("show-all-movies"),
      line = document.createElement("tr");
  line.innerHTML = "<td>" + this.title + "</td><td>" + this.year + "</td><td>" + this.genres + "</td><td>" + 
  this.ratings + "</td>";
  showAllMovies.appendChild(line);
}








