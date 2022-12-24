import styles from '../styles/components/Button.module.scss'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  label: string
  onClick?: () => void
}

export default function Button({ type = 'button', label, onClick }: Props) {
  return (
    <>
      <button className={styles.contactButton} type={type} onClick={onClick}>
        {label}
      </button>
    </>
  )
}
