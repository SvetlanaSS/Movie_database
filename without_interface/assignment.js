// This file does not contain an interface, only a simple HTML file for easy checking in the Console.

// Example of movies database
let movies = [
  {
      title: "The Lobster",
      year: 2015,
      genres: ["Comedy", "Drama", "Romance", "Sci-Fi"],
      ratings: [5, 4, 5, 5]
  },
  {
      title: "The Ring",
      year: 1854,
      genres: ["Horror", "Thriller"],
      ratings: [10, 10, 10, 10]
  },
  {
      title: "The bla bla movie",
      year: 2017,
      genres: ["Comedy", "Thriller"],
      ratings: [1, 1, 1, 0]
  }
]

// Create a movie with the Constructor Pattern. Create a special "constructor" function that works with objects.
function Movie(title, year, genres) {
  this.title = title;
  this.year = year;
  this.genres = genres;
}
// Create new copies of the movies
film1 = new Movie("Remember me", 2011, ["Kids", "Drama", "Romance"], [4, 5, 9, 4]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilize Module Pattern. This module is responsible for calculating the ratings of films.
let ModuleRating = (function() {
  // Rate movie function and return a movie object
  let rateMovie = function(){
    movie.ratings = [];
    movie.rating.push(rating);
    return movie;
  }

  // Private function _getAverageRatedMovieArray() is used by getWorstRatedMovie() and getTopRatedMovie() public functions
	let _getAverageRatedMovieArray = function() {
		resultsArray = [];
		movies.map((movie) => {
			let sum = movie.ratings.reduce(function(a, b) { return a + b; });
			let ratingNumber = sum / movie.ratings.length;
			resultsArray.push({ movie, ratingNumber })
			return resultsArray;
		})
		return resultsArray;
		/* Returns movies in the following format:
		[{ movie: movieObject, ratingNumber: 4.75 }, { movie: movieObject, ratingNumber: 10 }] */
	}

	// Get top rated movie as an object
	let getTopRatedMovie = function() {
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
	let getWorstRatedMovie = function() {
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
let ModuleYear = (function() {
  let getMoviesThisYear = function(year) {
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
  };

})();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilize Module Pattern. This module is responsible for working with genres.
let ModuleGenres = (function() {
  // Get all films of the same genre as the value of the parameter genres. There is a possibility to filter on multiple genres
  let getMoviesByGenre = function(inputGenres) {
    /* For example:
    Movies array = ["Comedy", "Drama", "Romance", "Sci-Fi"], ["Horror", "Thriller"], ["Comedy", "Thriller"]
    User input, inputGenres = ["Comedy", "Drama"].
    I need to check if all values of a inputGenres included in a movies array*/
    movies.map((movie) => {
      let movieGenres = movie.genres;
      let isarrayOfUserInputSubsetOfMovieGenres = inputGenres.every((val) => {
        return movieGenres.indexOf(val) >= 0;
      });
      if (isarrayOfUserInputSubsetOfMovieGenres) {
        console.log(movie.title);
      };
    });
  };


  // Remove genre/genres from the film
  let removeMovieGenres = function(genres) {
    /* For example:
    User selects the movie "The Lobster" with the genres ["Comedy", "Drama", "Romance", "Sci-Fi"] and wants to delete
    the following genres ["Romance", "Sci-Fi"]
    It means to delete array from array: user input array (with one or several values) from movies array */
    movies.map((movie) => {
      let resultGenres = movie.genres.filter((elem) => {
        return genres.indexOf(elem) === -1;
      });
      movie.genres = resultGenres;
      console.log(movie.genres);
    });
  };


  // Add genre/genres to the film
  let addMovieGenres = function(inputGenres) {
    /* For example:
    User selects the movie "The Ring" with the genres ["Horror", "Thriller"] and wants to add
    the following genres ["Mystic", "Sci-Fi"].
    It meents to add array to array: user input array, inputGenres (with one or several values) to movies array.
    But this function doesn't check if genre already exist */
    movies.map((movie) => {
      let resultGenres = movie.genres.concat(inputGenres);
      movie.genres = resultGenres;
      console.log(movie.genres);
    })
  };

  return {
    getMoviesByGenre: getMoviesByGenre,
    removeMovieGenres: removeMovieGenres,
    addMovieGenres: addMovieGenres
  };

})();
