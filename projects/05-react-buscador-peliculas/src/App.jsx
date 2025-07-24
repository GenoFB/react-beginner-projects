import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

function App () {
  const { mappedMovies } = useMovies()

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
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
