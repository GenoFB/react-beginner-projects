import './App.css'

function App () {
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
        acá van los resultados
      </main>
    </div>
  )
}

export default App
