// A Function that takes user input values from the form
function takeUserInput () {
  let title = document.getElementByID("title").value,
      year = document.getElementByID("year").value,
};

// A Function for creating new movies objects
function createMovie(title, year, genres, ratings){
  this.title = title;
  this.year = year;
  this.genres = genres;
  this.ratings = ratings;
};