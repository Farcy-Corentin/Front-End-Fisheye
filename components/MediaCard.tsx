import { IMedia } from '../interfaces/IMedia'
import Image from 'next/image'
import { MediaFactory } from '../factories/MediaFactory'
import styles from '../styles/components/MediaCard.module.scss'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Like from './Like'

interface Props {
  media: IMedia
}

export default function MediaCard({ media }: Props) {
  const router = useRouter()

  if (media.componentType === 'image') {
    const picture = MediaFactory.createPicture(media)

    return (
      <div className={styles.mediaCard}>
        <Link
          href={`/photographer/${router.query.id}?media=${media.id}`}
          as={`/photographer/${router.query.id}?media=${media.id}`}>
          <Image
            className={styles.img}
            src={picture.url}
            alt={picture.title}
            width={350}
            height={300}
          />
        </Link>
        <div className={styles.content}>
          <p>{picture.title}</p>
          <Like like={picture.like} />
        </div>
      </div>
    )
  }

  const video = MediaFactory.createMovie(media)

  return (
    <div className={styles.mediaCard}>
      <Link href={`/photographer/${router.query.id}?media=${media.id}`}>
        <video className={styles.video} src={video.url} />
      </Link>
      <div className={styles.content}>
        <p>{video.title}</p>
        <p className={styles.like}>
          {video.like} <FaHeart size={18} aria-label="likes" />
        </p>
      </div>
    </div>
  )
}
