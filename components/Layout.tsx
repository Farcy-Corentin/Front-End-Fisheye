import { ReactElement } from 'react'
import Header from './Header'

interface Props {
  children: ReactElement
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
