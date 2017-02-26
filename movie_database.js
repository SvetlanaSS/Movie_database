// A Function that takes user input values from the form
function takeUserInput() {
  var title = document.getElementById("title").value,
      year = document.getElementById("year").value,
      genres = document.getElementById("genres").value,
      ratings = document.getElementsByName("rating").value;
  // genres = $('input:checkbox:checked').map(function() {return this.value;}).get();

  console.log('title:', title);
  console.log('year:', year);
  console.log('genres:', genres);
  console.log('ratings:', ratings);
  // createMovie(title, year, genres, ratings);
}

// A Function for creating new movies objects
function createMovie(title, year, genres, ratings) {
  this.title = title;
  this.year = year;
  this.genres = genres;
  this.ratings = ratings;
}

// {
//   title: "bla",
//   year: 2017,
//   genres: ["drama", "comedy"],
//   ratings: [1,2,3]
// }

