import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useRef } from 'react'
import './App.css'

function App () {
  const { mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleClick = () => {
    const value = inputRef.current.value
    alert(value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' action='#'>
          <input ref={inputRef} type='text' placeholder='Harry potter, Avengers, The Matrix...' />
          <button onClick={handleClick} type='submit' className='button'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
