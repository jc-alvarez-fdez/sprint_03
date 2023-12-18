// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
    console.log("Exercice 1", result);
    return result;
  }

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie =>  movie.director === director);
  console.log("Exercice 2", result);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // extraigo las peliculas de un director determinado
  let moviesDirector = array.filter(movie => movie.director === director);
   // Si no se encuentran películas para el director, imprime un mensaje y devuelve 0.
   if (moviesDirector.length === 0) {
    console.log("EXERCISE 3 -> No movies found for the director");
    return 0;
  }

  // con reduce sumo el total de puntuaciones
  const totalAverage = moviesDirector.reduce((suma, movie) => suma + movie.score, 0);

  // obtengo el promedio dividiendo el total entre las películas existentes y lo convierto en un número con dos decimales
  let promedio = totalAverage / moviesDirector.length;
  console.log("Exercice 3", promedio.toFixed(2));
  return parseFloat(promedio.toFixed(2));
}

// Exercise 4: Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.map((movie) => movie.title);

}


// Exercise 5: Order by year, ascending
function orderByYear(array) {

}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
