import { useEffect, useState } from 'react'
import { getRandomFact } from './Services/facts'
import './App.css'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')

    fetch(`${CAT_ENDPOINT_IMAGE_URL}${firstWord}`)
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

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
