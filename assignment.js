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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilize Module Pattern. This module is responsible for calculating the ratings of films.
var ModuleRating = (function () {
  // Rate movie function and return a movie object
  var rateMovie = function(){
    movie.ratings = [];
    movie.rating.push(rating);
    return movie;
  }

  // Private function _getAverageRatedMovieArray() is used by
  // getWorstRatedMovie() and getTopRatedMovie() public functions.
	var _getAverageRatedMovieArray = function() {
		resultsArray = [];
		movies.map((movie) => {
			let sum = movie.ratings.reduce(function(a, b) { return a + b; });
			let ratingNumber = sum / movie.ratings.length;
			resultsArray.push({ movie, ratingNumber })
			return resultsArray;
		})
		return resultsArray;
		// Returns movies in the following format
		// [{ movie: movieObject, ratingNumber: 4.75 }, { movie: movieObject, ratingNumber: 4.75 }]
	}

	// Get top rated movie as an object
	var getTopRatedMovie = function() {
		let moviesWithRatings = _getAverageRatedMovieArray();
		// Returns max rating value
		let maxRes = Math.max.apply(Math, moviesWithRatings.map((object) => {
			return object.ratingNumber;
		}));
		// Search movie with maximum rating value
		let result = moviesWithRatings.find((object) => {
			return object.ratingNumber == maxRes;
		});
		return result;
	};

	// Get worst rated movie as an object
	var getWorstRatedMovie = function() {
	  let moviesWithRatings = _getAverageRatedMovieArray();
	  // Returns min rating value
	  let minRes = Math.min.apply(Math, moviesWithRatings.map((object) => {
	    return object.ratingNumber;
	  }));
	  // Search movie with minimun rating value
	  let result = moviesWithRatings.find((object) => {
	    return object.ratingNumber == minRes;
	  });
	  return result;
	};

  return {
    rateMovie: rateMovie,
    getTopRatedMovie: getTopRatedMovie,
		getWorstRatedMovie: getWorstRatedMovie
  };

})();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilize Module Pattern. This module is responsible to get a list of movies with the selected year.
var ModuleYear = function () {
  var getMoviesThisYear = function(year) {
    resultsArray = [];
    movies.map((movie) => {
      if (movie.year === year) {
        resultsArray.push(movie);
      }
      return resultsArray;
    });
    return resultsArray;
  };

  return {
    getMoviesThisYear: getMoviesThisYear
  }
}


function getMoviesByGenre(genres) {
  // kommer senare
}

function removeMovieGenres(genres) {
  // kommer senare
}

function addMovieGenres(genres) {
  // kommer senare
}
