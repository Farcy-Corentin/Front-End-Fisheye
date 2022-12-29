import { IMedia } from '../interfaces/IMedia'
import Image from 'next/image'
import { MediaFactory } from '../factories/MediaFactory'
import styles from '../styles/components/MediaCard.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Like from './Like'

interface Props {
  media: IMedia
  onLikeChange: (media: IMedia) => void
}

export default function MediaCard({ media, onLikeChange }: Props) {
  const router = useRouter()

  if (media.componentType === 'image') {
    const picture = MediaFactory.createPicture(media)

    return (
      <div className={styles.mediaCard}>
        <Link
          href={`/photographer/${router.query.id}?media=${media.id}`}
          shallow={true}>
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
          <Like
            likeCounterChange={(like) => {
              picture.like = like
              onLikeChange(picture as IMedia)
            }}
            like={picture.like}
          />
        </div>
      </div>
    )
  }

  const video = MediaFactory.createMovie(media)

  return (
    <div className={styles.mediaCard}>
      <Link
        href={`/photographer/${router.query.id}?media=${media.id}`}
        shallow={true}>
        {/* eslint-disable-line no-console */}
        <video className={styles.video} src={video.url} />
      </Link>
      <div className={styles.content}>
        <p>{video.title}</p>
        <Like
          likeCounterChange={(like) => {
            video.like = like
            onLikeChange(video as IMedia)
          }}
          like={video.like}
        />
      </div>
    </div>
  )
}
