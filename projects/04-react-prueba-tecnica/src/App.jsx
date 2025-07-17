import { useEffect, useState } from 'react'
const CAT_ENDOPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState('Random Fact :)')

  useEffect(() => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  function factFirstWord (fact) {
    return fact.split(' ')[0]
  }
  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${factFirstWord(fact)}`

  return (
    <main>
      <h1>App de gatitos cute</h1>
      {CAT_ENDPOINT_IMAGE_URL && <img src={CAT_ENDPOINT_IMAGE_URL} alt='' />}
    </main>
  )
}
