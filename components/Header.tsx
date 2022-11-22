import { useRouter } from 'next/router'
import styles from '../styles/layout/Header.module.scss'
import Logo from './Logo'

export default function Header() {
  const router = useRouter()
  const url = router.pathname

  return (
    <header className={styles.header}>
      <Logo
        src="/assets/images/logo.png"
        alt="Fisheye Home page"
        width={200}
        height={50}
      />
      {url === '/' ? <h1>Nos photographes</h1> : null}
    </header>
  )
}
