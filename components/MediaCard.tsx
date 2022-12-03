import { IMedia } from '../interfaces/IMedia'
import Image from 'next/image'
import { MediaFactory } from '../factories/MediaFactory'
import styles from '../styles/components/MediaCard.module.scss'
import { FaHeart } from 'react-icons/fa'

interface Props {
  media: IMedia
}

export default function MediaCard({ media }: Props) {
  if (media.componentType === 'image') {
    const picture = MediaFactory.createPicture(media)

    return (
      <div className={styles.mediaCard}>
        <Image
          className={styles.img}
          src={picture.url}
          alt={picture.title}
          width={350}
          height={300}
        />
        <div className={styles.content}>
          <p>{picture.title}</p>
          <p className={styles.like}>
            {picture.like} <FaHeart size={18} aria-label="likes" />
          </p>
        </div>
      </div>
    )
  }

  const video = MediaFactory.createMovie(media)

  return (
    <div className={styles.mediaCard}>
      <video className={styles.video} src={video.url} controls={true} />
      <div className={styles.content}>
        <p>{video.title}</p>
        <p className={styles.like}>
          {video.like} <FaHeart size={18} aria-label="likes" />
        </p>
      </div>
    </div>
  )
}
