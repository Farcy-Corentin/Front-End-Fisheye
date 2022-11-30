import { IMedia } from '../interfaces/IMedia'
import styles from '../styles/pages/Photographer.module.scss'
import MediaCard from './MediaCard'

interface Props {
  media: IMedia[]
}

export default function MediaGrid({ media }: Props) {
  return (
    <div className={styles.mediaSection}>
      {media.map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </div>
  )
}
