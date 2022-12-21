import { PhotographerProfileView } from '../interfaces/IPhotographer'
import styles from '../styles/layout/PhotographerHeader.module.scss'
import Avatar from './Avatar'
import Button from './Button'
import ContactFormModal from './ContactFormModal'
import { useState } from 'react'
interface Props {
  photographerProfileView: PhotographerProfileView
}

export default function PhotographerHeader({ photographerProfileView }: Props) {
  const [isOpenContactFormModal, setIsOpenContactFormModal] =
    useState<boolean>(false)
  return (
    <header className={styles.photographHeader}>
      <div>
        <h1 className={styles.title}>{photographerProfileView.name}</h1>
        <p className={styles.address}>{photographerProfileView.address}</p>
        <p>{photographerProfileView.tagline}</p>
      </div>
      <div>
        <Button
          type="button"
          label="Contactez-moi"
          onClick={() => setIsOpenContactFormModal(true)}
        />
        <ContactFormModal
          isOpen={isOpenContactFormModal}
          setIsOpen={setIsOpenContactFormModal}
          userName={photographerProfileView.name}
        />
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
