import { PhotographerProfileView } from '../interfaces/IPhotographer'
import styles from '../styles/layout/PhotographerHeader.module.scss'
import Avatar from './Avatar'
import Button from './Button'
interface Props {
  photographerProfileView: PhotographerProfileView
}

export default function PhotographerHeader({ photographerProfileView }: Props) {
  return (
    <header className={styles.photographHeader}>
      <div>
        <h1 className={styles.title}>{photographerProfileView.name}</h1>
        <p className={styles.address}>{photographerProfileView.address}</p>
        <p>{photographerProfileView.tagline}</p>
      </div>
      <div>
        <Button type="button" label="Contactez-moi" />
      </div>
      <div>
        <Avatar
          src={photographerProfileView.picture}
          alt={photographerProfileView.name}
          width={200}
          height={200}
        />
      </div>
    </header>
  )
}
