const CAT_ENDOPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDOPOINT_RANDOM_FACT_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}
