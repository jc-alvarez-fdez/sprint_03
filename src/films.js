// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directors = array.map((movie) => movie.director);
    console.log("Exercice 1: all directors ", directors);
    return directors;
  }

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesDirector = array.filter(movie =>  movie.director === director);
  console.log("Exercice 2: films of a certain director ", moviesDirector);
  return moviesDirector;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // extraigo las peliculas de un director determinado
  let averageDirector = array.filter(movie => movie.director === director);
   // Si no se encuentran películas para el director, imprime un mensaje y devuelve 0.
   if (averageDirector.length === 0) {
    console.log("EXERCISE 3 -> No movies found for the director");
    return 0;
  }

  // con reduce sumo el total de puntuaciones
  const totalAverage = averageDirector.reduce((suma, movie) => suma + movie.score, 0);

  // obtengo el promedio dividiendo el total entre las películas existentes y lo convierto en un número con dos decimales
  let promedio = totalAverage / averageDirector.length;
  console.log("Exercice 3: average of the films of a given director", promedio.toFixed(2));
  return parseFloat(promedio.toFixed(2));
}

// Exercise 4: Alphabetic order by title
function orderAlphabetically(array) {
  // Ordeno el array y acoto la salida con "slice" a las posiciones 0 a 20 (la posición final no se incluye)
  let alphabetically = array.map((movie) => movie.title).sort().slice(0, 20);
  console.log("Exercice 4: alphabetic order by title (20)", alphabetically);
  return alphabetically;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
    // Utilizo "slice" para crear una copia del array y luego aplico "sort" para ordenar las películas
    let yearTitle = array.slice().sort((a, b) => {
    // Si tienen distinto año, se ordena por año
      if (a.year !== b.year) {
      return a.year - b.year;
    // Si tienen el mismo año, las ordena por título utilizando `localeCompare` comparando las cadenas de texto alfabéticamente  
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  console.log("Exercice 5: order by year, ascending ", yearTitle);
  return yearTitle;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

  // Filtro las películas que pertenecen a la categoría especificada.
  let averageCategory = array.filter(movie => movie.genre.includes(category));

   // Si no se encuentran películas de ese género, imprime un mensaje y devuelve 0.
   if (averageCategory.length === 0) {
    console.log("EXERCISE 6 -> No movies found for the genre");
    return 0;
  }

  // con reduce sumo el total de puntuaciones
  const totalAverage = averageCategory.reduce((suma, movie) => suma + movie.score, 0);

  // obtengo el promedio dividiendo el total entre las películas existentes y lo convierto en un número con dos decimales
  let promedio = totalAverage / averageCategory.length;
  console.log("Exercice 6: average of the movies in a category ", promedio.toFixed(2));
  return parseFloat(promedio.toFixed(2));

}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let modifiedTime = array.map(movie => {
  // Con "split" divido el string "duration" y lo convierto en un array [horas, minutos]
  let durationParts = movie.duration.split(' ');
  let totalMinutes = 0;

  // Itero por los elementos del array creado con horas y minutos
  for (let part of durationParts) {
    if (part.includes('h')) {
      // Si incluye 'h', convierto en número entero, multiplico por 60 y sumo al total de minutos.
      totalMinutes += parseInt(part) * 60;
    } 
    else if (part.includes('min')) {
      // Si incluye 'min', convierto en número entero y sumo al total de minutos.
      totalMinutes += parseInt(part);
    }
  } 
  // Devuelvo un objeto de movies con duración en minutos 
  return { ...movie, duration: totalMinutes };
});

  console.log("Exercice 7: duration of movies to minutes ", modifiedTime);
  return modifiedTime;

}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  // Filtro las películas por año
  let moviesYear = array.filter(movie => movie.year === year); 
  let bestMovie = []; 
  // Si no hay películas para el año escogido, imprimo un mensaje y devuelvo un array vacío
  if (moviesYear.length === 0) {
    console.log(`EXERCISE 8 -> No movies found for the year ${year}`);
  }
   else {
     // Con "reduce" encuentro la mejor puntuación del array filtrado por año
     bestMovie = moviesYear.reduce((best, current) => {
       return current.score > best.score ? current : best;
     });
  }      
  console.log("Exercice 8: the best film of a year ", bestMovie);
  return [bestMovie]; // Devuelvo el resultado en un array

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
