import styles from '../styles/components/MediaCard.module.scss'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'

interface Props {
  like: number
}
export default function Like({ like }: Props) {
  const [likeCounter, setLikeCounter] = useState(like)
  const [isLike, setIsLike] = useState(false)

  const handleClick = () => {
    setLikeCounter(likeCounter + (isLike ? -1 : 1))
    setIsLike(!isLike)
  }

  const HeartIcon = isLike ? FaHeart : FaRegHeart

  return (
    <>
      <p className={styles.like}>
        {likeCounter}
        <HeartIcon size={18} aria-label="likes" onClick={handleClick} />
      </p>
    </>
  )
}
