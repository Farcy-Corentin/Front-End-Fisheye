import { useState } from 'react'

export default function useLike(like: number) {
  const [likeCounter, setLikeCounter] = useState(like)
  const [isLike, setIsLike] = useState(false)

  const handleClick = () => {
    setLikeCounter(likeCounter + (isLike ? -1 : 1))
    setIsLike(!isLike)
  }

  return { likeCounter, isLike, handleClick }
}
