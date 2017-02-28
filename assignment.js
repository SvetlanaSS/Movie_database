// This file does not contain HTML and other three functions.

// Example of movies database
let movies = [
  {
      title: 'The Lobster',
      year: 2015,
      genres: ['Comedy', 'Drama', 'Romance', 'Sci-Fi'],
      ratings: [5, 4, 5, 5]
  },
  {
      title: 'The Ring',
      year: 1854,
      genres: ['Horror', 'Thriller'],
      ratings: [10, 10, 10, 10]
  },
  {
      title: 'The bla bla movie',
      year: 2017,
      genres: ['Comedy', 'Thriller'],
      ratings: [1, 1, 1, 0]
  }
]

// Create a movie with the Constructor Pattern
function Movie(title, year, genres) {
  this.title = title;
  this.year = year;
  this.genres = genres;
}
// film1 = new Movie('movie title', 2011, ['Kids', 'Drama', 'Romance']);

// Rate movie function and return a movie object
function rateMovie(movie, rating) {
  movie.ratings = [];
  movie.rating.push(rating);
  return movie;
}

// get average rated movie array
// function used as a help function in getWorstRatedMovie() and getTopRatedMovie()
function getAverageRatedMovieArray() {
  resultsArray = [];
  // use movies array as an example
  movies.map((movie) => {
    let sum = movie.ratings.reduce(function(a, b) { return a + b; });
    let ratingNumber = sum / movie.ratings.length;
    resultsArray.push({ movie, ratingNumber })
    return resultsArray;
  })
  return resultsArray;
  // returns movies in the following format
  // [{ movie: movieObject, ratingNumber: 4.75 }, { movie: movieObject, ratingNumber: 4.75 }]
}

// get top rated movie as an object
function getTopRatedMovie() {
  let moviesWithRatings = getAverageRatedMovieArray();
// returns max rating value
  let maxRes = Math.max.apply(Math, moviesWithRatings.map((object) => {
    return object.ratingNumber;
  }));
// search movie with maximum rating value
  let result = moviesWithRatings.find((object) => {
    return object.ratingNumber == maxRes;
  });
  return result;
};

// get worst rated movie as an object
function getWorstRatedMovie() {
  let moviesWithRatings = getAverageRatedMovieArray();
// returns min rating value
  let minRes = Math.min.apply(Math, moviesWithRatings.map((object) => {
    return object.ratingNumber;
  }));
// search movie with minimun rating value
  let result = moviesWithRatings.find((object) => {
    return object.ratingNumber == minRes;
  });
  return result;
};

// get a list of movies with the selected year
function getMoviesThisYear(year) {
  resultsArray = [];
// use movies array as an example
  movies.map((movie) => {
    if (movie.year === year) {
      resultsArray.push(movie);
    }
    return resultsArray;
  });
  return resultsArray;
};

function getMoviesByGenre(genres) {
  // kommer senare
}

function removeMovieGenres(genres) {
  // kommer senare
}

function addMovieGenres(genres) {
  // kommer senare
}
