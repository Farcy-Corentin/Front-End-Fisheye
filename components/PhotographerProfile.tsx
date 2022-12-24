import Avatar from './Avatar'
import { PhotographerProfileView } from '../interfaces/IPhotographer'
import styles from '../styles/components/PhotographerProfile.module.scss'
import Link from 'next/link'

export default function PhotographerProfile({
  picture,
  name,
  tagline,
  url,
  formattedPrice,
  address
}: PhotographerProfileView) {
  return (
    <>
      <Link href={url}>
        <Avatar src={picture} alt={name} width={200} height={200} />
      </Link>
      <section>
        <h2 className={styles.photographer_profile_title}>{name}</h2>
        <p className={styles.photographer_profile_address}>{address}</p>
        <p className={styles.photographer_profile_tagline}>{tagline}</p>
        <p className={styles.photographer_profile_price}>{formattedPrice}</p>
      </section>
    </>
  )
}
