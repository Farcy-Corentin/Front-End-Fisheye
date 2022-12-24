import styles from '../styles/layout/Header.module.scss'
import Logo from './Logo'
import Link from 'next/link'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'

export default function Header(): ReactElement | null {
  const router = useRouter()
  const url = router.pathname

  if (url === '/photographer/[id]') {
    return (
      <header className={styles.header}>
        <Link href="/">
          <Logo
            src="/assets/images/logo.png"
            alt="Fisheye Home page"
            width={200}
            height={50}
          />
        </Link>
      </header>
    )
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo
          src="/assets/images/logo.png"
          alt="Fisheye Home page"
          width={200}
          height={50}
        />
      </Link>
      <Link href="/" className={styles.navLink}>
        <h1>Nos photographes</h1>
      </Link>
    </header>
  )
}
