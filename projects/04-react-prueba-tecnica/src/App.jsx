import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos cute</h1>

      <button onClick={handleClick}>Get new fact :D</button>

      <p>{fact}</p>
      {imgUrl && <img src={`${imgUrl}`} alt={`Image extracted using the first three words of the fact: ${fact}`} />}

    </main>

  )
}
