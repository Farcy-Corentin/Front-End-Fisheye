import Image from 'next/image'
import { IImage } from '../interfaces/IImage'
import styles from '../styles/components/Avatar.module.scss'

export default function Avatar({ src, alt, width, height }: IImage) {
  return (
    <>
      <Image
        className={styles.avatar}
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={90}
        priority={true}
      />
    </>
  )
}
