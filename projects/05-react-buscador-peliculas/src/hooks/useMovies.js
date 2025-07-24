import positiveResults from '../mocks/positive-results.json'
// import negativeResults from '../mocks/negative-results.json'

export function useMovies () {
  const movies = positiveResults.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { mappedMovies }
}
