/* First module ModuleUserInput has a simple interface. You can run html-file and create a new movie and see a list of movies. I use DOM-element and
jquery's selectors.
The other modules do not have an interface. Unfortunately, I did not have time to complete the interface. */


/* Utilize Module Pattern. A Module to take user input values from the form, create a new movie and show a list of the movies.
This module has html-file.*/
let ModuleUserInput = (function(){
  let processUserInput = function() {
    // Take user input
    let title = getTitle(),
        year = getYear(),
        genres = getGenres(); //return array of selected genres
    // Create an object from user input
    let film = createNewMovie(title, year, genres, ratings);
    showListOfMovies(film);
  };

  // Get film title and clean user input afterwards
  let getTitle = function() {
    let title = document.getElementById("title").value;
    document.getElementById("title").value = "";
    return title;
  };

  // Get year and clean user input afterwards
  let getYear = function(){
    let year = document.getElementById("year").value;
    document.getElementById("year").value = "";
    return year;
  };

  // Collect user selected genres and clean user input afterwards
  let getGenres = function() {
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
  };

  // Create the Constructor Pattern
  let Movie = function(title, year, genres, ratings) {
    this.title = title;
    this.year = year;
    this.genres = genres;
    this.ratings = ratings;
  };

  // Now we can create the objects and push them to the movies
  let createNewMovie = function(title, year, genres, ratings) {
    film = new Movie(title, year, genres, ratings);
    console.log(film);
    return film;
  };

  // Show the list of all movies
  let showListOfMovies = function(film) {
    let showAllMovies = document.getElementById("show-all-movies"),
        line = document.createElement("tr"),
        ratingForm = document.getElementById("ratings");
    line.innerHTML =
      `<td>${film.title}</td>
       <td>${film.year}</td>
       <td>${film.genres}</td>
       <td></td>
       <td>
        <form>
         ${ratingForm.innerHTML}
         <button type="button" onclick="getRating(this.form)" value="Add">Add</button>
         </form>
       </td>`
    showAllMovies.appendChild(line);
  };

  return {
    processUserInput: processUserInput,
    getTitle: getTitle,
    getYear: getYear,
    getGenres:getGenres,
    Movie: Movie,
    createNewMovie: createNewMovie,
    showListOfMovies:showListOfMovies
  };

})();


/* I did not complete the interface and I can not give a rating to the movie in that interface. So I'm writing an example of the movie object
to be able to test the functionality of other functions in the Console, when I start html-file */

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilize Module Pattern. This module is responsible for calculating the ratings of films.
let ModuleRating = (function() {
  // Rate movie function and return a movie
  let rateMovie = function(movie, rating) { // rating array
    movie.ratings = movie.ratings.concat(rating);
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
