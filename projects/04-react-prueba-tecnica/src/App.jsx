import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDOPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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

  const handleClick = () => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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
