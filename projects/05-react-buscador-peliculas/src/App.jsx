import positiveResults from './mocks/positive-results.json'
import negativeResults from './mocks/negative-results.json'
import { Movies } from './components/Movies'
import './App.css'

function App () {
  const movies = positiveResults.Search

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
