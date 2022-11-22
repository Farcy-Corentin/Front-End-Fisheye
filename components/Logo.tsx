import Image from 'next/image'
import styles from '../styles/components/Logo.module.scss'
import { IImage } from '../interfaces/IImage'

export default function Logo({ src, alt, width, height }: IImage) {
  return (
    <>
      <Image
        src={src}
        className={styles.logo}
        alt={alt}
        width={width}
        height={height}
      />
    </>
  )
}
