# Movie_database
Create a movie database within design pattern.

Link to GitHub: https://github.com/SvetlanaSS/Movie_database.

File "movie_database.js" contains several modules. First module ModuleUserInput has a simple interface. You can run html-file and create a new movie and see a list of movies. The other modules and functions in them can only be checked using the Console.


File "movie_database.js" contains the following structure:
1. **ModuleUserInput** - a module to take user input values from the form, create a new movie and show a list of the movies. Module can be checked using a html-file. The module contains the following functions:
⋅⋅* **_processUserInput()_** - a function that takes user input values from the form,
⋅⋅* getTitle() - a function to get film title from the form,
⋅⋅* getYear() - a function to get year from the form,
⋅⋅* getGenres() - a function to get selected genres from the form,
⋅⋅* Movie(title, year, genres, ratings) - a special "constructor" function that works with objects,
⋅⋅* createNewMovie(title, year, genres, ratings) - a function to create a new movie,
⋅⋅* showListOfMovies(film) - a function to show a list of all movies.

2. **ModuleRating** - a module that is responsible for calculating the ratings of films,
⋅⋅* rateMovie() - a function that rates movie and returns a movie object,
⋅⋅* _getAverageRatedMovieArray - a private function starts with "_" that is not called by the user and is used to calculate the best and worst ratings of movies,
⋅⋅* getTopRatedMovie - a function that get top rated movie as an object,
⋅⋅* getWorstRatedMovie - a function that get worst rated movie as an object,

3) ModuleYear - a module that is responsible to get a list of movies with the selected year,
⋅⋅* getMoviesThisYear - a function of the same value,

4) ModuleGenres - a module that is responsible for working with genres,
⋅⋅* getMoviesByGenre - a function that get all movies of the same genres as the user inputs value,
⋅⋅* removeMovieGenres - a function that delete genre/genres from the film (delete user inputs value),
⋅⋅* addMovieGenres - a function that add genre/genres to the film (add user inputs value).

Module Pattern isolates parts of the application logic from the global context to avoid conflicts and errors. Public variables and functions in a global context can conflict with interfaces of other developers or with libraries.
Module pattern returns only the public part of the API, leaving everything else accessible only within the closures.
The module is an independent component that solves one task. Inside the module there can be complex logic, but its purpose is to hide it and provide a simple and understandable API.
Cons of Module Pattern - you can not refer to the private methods. This can create problems in unit testing - the inability to create automated unit tests for private items.
