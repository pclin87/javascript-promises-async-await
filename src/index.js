import { fetchWithTimeout } from './services'
import { fetchMovies } from './services'
import { fetchBooks } from './services'
const movies = require('./data/movies.json')


function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies ]) => ({
        books,
        movies
      }))
      .catch(error => console.log("Error fetching books and movies", error));
}