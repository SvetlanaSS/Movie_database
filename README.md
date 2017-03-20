# Movie_database
Create a movie database within design pattern.

Link to GitHub: https://github.com/SvetlanaSS/Movie_database.

File "movie_database.js" includes index.html and have functions to add and show movie.

File "assignment.js" does not contain an interface, only a simple HTML file for easy checking in the Console.

File "assignment.js" contains the following structure:
1) Movie(title, year, genres) - this is a special "constructor" function that works with objects. The function has a place in the global scope. Inside the "constructor", the keyword "this" refers to the newly created object.
Calling the function with a prefix "new", I tell JS that this is the "constructor" function, it initializes a new object with the members defined in it. It means I can create new copies of the movies:
film1 = new Movie("Remember me", 2011, ["Kids", "Drama", "Romance"], [4, 5, 9, 4]).

This is a simple version of the Constructor Pattern. With it it's easy to add new movies and it's understandable for me. But the version has some problems, one of them is the complexity with inheritance. But I have nothing to inherit in my task and so I ised it.

2) ModuleRating - a module that is responsible for calculating the ratings of films,
  * rateMovie() - a function that rates movie and returns a movie object,
  * _getAverageRatedMovieArray - a private function starts with "_" that is not called by the user and is used to calculate the best and worst ratings of movies,
  * getTopRatedMovie - a function that get top rated movie as an object,
  * getWorstRatedMovie - a function that get worst rated movie as an object,

3) ModuleYear - a module that is responsible to get a list of movies with the selected year,
  * getMoviesThisYear - a function of the same value,

4) ModuleGenres - a module that is responsible for working with genres,
  * getMoviesByGenre - a function that get all movies of the same genres as the user inputs value,
  * removeMovieGenres - a function that delete genre/genres from the film (delete user inputs value),
  * addMovieGenres - a function that add genre/genres to the film (add user inputs value).

Module Pattern isolates parts of the application logic from the global context to avoid conflicts and errors. Public variables and functions in a global context can conflict with interfaces of other developers or with libraries.
Module pattern returns only the public part of the API, leaving everything else accessible only within the closures.
The module is an independent component that solves one task. Inside the module there can be complex logic, but its purpose is to hide it and provide a simple and understandable API.
