import styles from '../styles/components/MediaCard.module.scss'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useEffect } from 'react'
import useLike from '../hooks/useLike'
import button from '../styles/components/Button.module.scss'

interface Props {
  like: number
  likeCounterChange: (like: number) => void
}
export default function Like({ like, likeCounterChange }: Props) {
  const { isLike, likeCounter, handleClick } = useLike(like)
  const HeartIcon = isLike ? FaHeart : FaRegHeart

  useEffect(() => {
    likeCounterChange(likeCounter)
  }, [likeCounter])

  return (
    <p className={styles.like}>
      {likeCounter}
      <button className={button.likeBtn} onClick={handleClick} tabIndex={0}>
        <HeartIcon size={18} aria-label="likes" />
      </button>
    </p>
  )
}
