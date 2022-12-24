import Image from 'next/image'
import styles from '../styles/components/Lightbox.module.scss'
import { IMedia } from '../interfaces/IMedia'
import { MediaFactory } from '../factories/MediaFactory'

interface Props {
  media: IMedia[]
  mediaIndex: number
}
export default function LightboxMedia({ media, mediaIndex }: Props) {
  const mediaLightbox =
    media[mediaIndex]?.componentType === 'image'
      ? MediaFactory.createPicture(media[mediaIndex])
      : MediaFactory.createMovie(media[mediaIndex])
  return (
    <>
      {media[mediaIndex]?.componentType === 'image' ? (
        <Image
          src={mediaLightbox.url}
          alt={mediaLightbox.title}
          fill={true}
          priority={true}
          style={{
            objectFit: 'cover'
          }}
        />
      ) : (
        <video src={mediaLightbox.url} controls={true} />
      )}
      <p className={styles.title}>{mediaLightbox.title}</p>
    </>
  )
}
