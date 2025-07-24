import positiveResults from './mocks/positive-results.json'
import negativeResults from './mocks/negative-results.json'
import './App.css'

function App () {
  const movies = positiveResults.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action='#'>
          <input type='text' placeholder='Harry potter, Avengers, The Matrix...' />
          <button type='submit' className='button'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? (
              <ul className='movies'>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID} className='movie'>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  ))
                }
              </ul>
              )
            : (
              <p>No se encontraron películas para esta búsqueda</p>
              )
          }
      </main>
    </div>
  )
}

export default App
