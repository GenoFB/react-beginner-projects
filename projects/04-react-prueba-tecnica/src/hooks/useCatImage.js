import { useEffect, useState } from 'react'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imgUrl, setImgUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')

    fetch(`${CAT_ENDPOINT_IMAGE_URL}${firstWord}`)
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])
  return { imgUrl }
}
