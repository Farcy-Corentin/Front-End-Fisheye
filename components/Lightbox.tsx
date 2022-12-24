import styles from '../styles/components/Lightbox.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IMedia, MediaApi } from '../interfaces/IMedia'
import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { MediaFactory } from '../factories/MediaFactory'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import { FocusOn } from 'react-focus-on'
import LightboxMedia from './LightboxMedia'

function useLightboxNavigation(
  prevBtn: RefObject<HTMLButtonElement>,
  nextBtn: RefObject<HTMLButtonElement>
) {
  const [mediaIndex, setMediaIndex] = useState<number>(0)

  const prev = async (media: IMedia[]) => {
    console.log('prev', prevBtn)
    prevBtn?.current?.focus()
    const isFirstMedia = mediaIndex === 0
    setMediaIndex(isFirstMedia ? media.length - 1 : mediaIndex - 1)
  }

  const next = async (media: IMedia[]) => {
    nextBtn?.current?.focus()
    const isNextMedia = mediaIndex === media.length - 1
    setMediaIndex(isNextMedia ? 0 : mediaIndex + 1)
  }

  return {
    mediaIndex,
    setMediaIndex,
    prev,
    next
  }
}

export default function Lightbox() {
  const router = useRouter()
  const photographerId = router.query.id
  const mediaId = router.query.media

  const [media, setMedia] = useState<IMedia[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const prevBtn = useRef<HTMLButtonElement>(null)
  const nextBtn = useRef<HTMLButtonElement>(null)

  const { mediaIndex, setMediaIndex, prev, next } = useLightboxNavigation(
    prevBtn,
    nextBtn
  )

  const fetchMedia = async () => {
    setIsLoading(true)
    const photographerId = parseInt(router.query.id as string)
    const defaultFilter = 'title'
    const currentFilterName = localStorage.getItem('name')
      ? localStorage.getItem('name')
      : defaultFilter

    const response = await fetch(
      `/api/photographer/${photographerId}/media?filter=${currentFilterName}`
    )
    const data: MediaApi[] = await response.json()
    const mediaData = data.map(MediaFactory.createMedia)

    setMedia(mediaData)
    setMediaIndex(
      mediaData.findIndex((media) => media.id === parseInt(mediaId as string))
    )
    setIsLoading(false)
  }

  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    fetchMedia()
  }, [])

  useEffect(() => {
    const mediaId = media[mediaIndex]?.id
    if (mediaId === undefined) {
      return
    }
    router.push(`/photographer/${photographerId}/?media=${mediaId}`).then()
  }, [media, mediaIndex])

  const onDocumentKeyup = useCallback(
    async (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        await prev(media)
      }
      if (event.key === 'ArrowRight') {
        await next(media)
      }
    },
    [media, next, prev]
  )

  useEffect(() => {
    document.addEventListener('keyup', onDocumentKeyup)

    return () => {
      document.removeEventListener('keyup', onDocumentKeyup)
    }
  }, [onDocumentKeyup])

  if (!hasMounted) {
    return null
  }

  if (isLoading) {
    return null
  }

  return (
    <FocusOn
      onEscapeKey={async () =>
        await router.push(`/photographer/${photographerId}`)
      }>
      <div className={styles.overlay} role={'dialog'} aria-modal="true">
        <Link
          className={styles.closeBtn}
          href={`/photographer/${photographerId}`}>
          <FaTimes />
        </Link>
        <button
          className={styles.previousBtn}
          onClick={() => prev(media).then()}
          ref={prevBtn}>
          <FaChevronLeft />
        </button>
        <div className={styles.content}>
          <LightboxMedia media={media} mediaIndex={mediaIndex} />
        </div>
        <button
          className={styles.nextBtn}
          onClick={() => next(media).then()}
          ref={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
    </FocusOn>
  )
}
