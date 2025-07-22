import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const { imgUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
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
