import Modal from 'react-modal'
import { Dispatch, SetStateAction, useState } from 'react'
import styles from '../styles/components/Form.module.scss'
import button from '../styles/components/Button.module.scss'
import closeIcon from '../public/assets/icons/close.svg'
import Image from 'next/image'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  userName: string
}

Modal.setAppElement('#__next')
export default function ContactFormModal({
  isOpen,
  setIsOpen,
  userName
}: Props) {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log('firstname', firstname)
    console.log('lastname', lastname)
    console.log('email', email)
    console.log('message', message)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      overlayClassName={styles.overlay}
      role="dialog"
      aria-describedby="contact modal"
      className={styles.modal}>
      <div>
        <header>
          <h2>
            Contactez-moi <span>{userName}</span>
          </h2>
          <Image
            src={closeIcon}
            aria-label="Close contact Form"
            alt="close modal icon"
            width={50}
            height={50}
            onClick={() => setIsOpen(false)}
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                setIsOpen(false)
              }
            }}
            tabIndex={0}
          />
        </header>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastname">Nom</label>
            <input
              id="lastname"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button type="submit" className={button.contactButton}>
            Envoyer
          </button>
        </form>
      </div>
    </Modal>
  )
}
