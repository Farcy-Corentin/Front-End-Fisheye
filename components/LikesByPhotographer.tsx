import styles from '../styles/components/LikeByPhotographer.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PhotographerFactory } from '../factories/PhotographerFactory'
import { FaHeart } from 'react-icons/fa'
interface Props {
  totalLike: number
}
export default function LikesByPhotographer({ totalLike }: Props) {
  const [photographerPrice, setPhotographerPrice] = useState(0)
  const router = useRouter()

  const getPhotographerPrice = async () => {
    const photographerId = router.query.id as string
    const response = await fetch(`/api/photographer/${photographerId}`)
    const data = await response.json()
    setPhotographerPrice(PhotographerFactory.createPhotographer(data).price)
  }

  useEffect(() => {
    getPhotographerPrice()
  }, [getPhotographerPrice()])

  return (
    <div className={styles.LikeBox}>
      <p>
        {totalLike} <FaHeart size={18} />
      </p>
      <p>{photographerPrice}€/jour</p>
    </div>
  )
}
