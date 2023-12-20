// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let directors = array.map((movie) => movie.director);
  console.log("Exercice 1: all directors ", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let moviesDirector = array.filter(movie => movie.director === director);
  console.log("Exercice 2: films of a certain director ", moviesDirector);
  return moviesDirector;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let averageDirector = array.filter(movie => movie.director === director);

  if (averageDirector.length === 0) {
    console.log("EXERCISE 3 -> No movies found for the director");
    return 0;
  }
  const totalAverage = averageDirector.reduce((suma, movie) => suma + movie.score, 0);

  let promedio = totalAverage / averageDirector.length;
  console.log("Exercice 3: average of the films of a given director", promedio.toFixed(2));
  return parseFloat(promedio.toFixed(2));
}

// Exercise 4: Alphabetic order by title
function orderAlphabetically(array) {

  let alphabetically = array.map((movie) => movie.title).sort().slice(0, 20);
  console.log("Exercice 4: alphabetic order by title (20)", alphabetically);
  return alphabetically;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let yearTitle = array.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    else {
      return a.title.localeCompare(b.title);
    }
  });
  console.log("Exercice 5: order by year, ascending ", yearTitle);
  return yearTitle;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

  let averageCategory = array.filter(movie => movie.genre.includes(category));

  if (averageCategory.length === 0) {
    console.log("EXERCISE 6 -> No movies found for the genre");
    return 0;
  }

  const totalAverage = averageCategory.reduce((suma, movie) => suma + movie.score, 0);

  let promedio = totalAverage / averageCategory.length;
  console.log("Exercice 6: average of the movies in a category ", promedio.toFixed(2));
  return parseFloat(promedio.toFixed(2));
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let modifiedTime = array.map(movie => {

    let durationParts = movie.duration.split(' ');
    let totalMinutes = 0;

    for (let part of durationParts) {
      if (part.includes('h')) {
        totalMinutes += parseInt(part) * 60;
      }
      else if (part.includes('min')) {
        totalMinutes += parseInt(part);
      }
    }
    return { ...movie, duration: totalMinutes };
  });

  console.log("Exercice 7: duration of movies to minutes ", modifiedTime);
  return modifiedTime;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let moviesYear = array.filter(movie => movie.year === year);
  let bestMovie = [];
  if (moviesYear.length === 0) {
    console.log(`EXERCISE 8 -> No movies found for the year ${year}`);
  }
  else {
    bestMovie = moviesYear.reduce((best, current) => {
      return current.score > best.score ? current : best;
    });
  }
  console.log("Exercice 8: the best film of a year ", bestMovie);
  return [bestMovie];
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
