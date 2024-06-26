import { IMedia, MediaApi } from '../interfaces/IMedia'
import styles from '../styles/pages/Photographer.module.scss'
import MediaCard from './MediaCard'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { MediaFactory } from '../factories/MediaFactory'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import button from '../styles/components/Button.module.scss'
import dropdown from '../styles/components/Dropdown.module.scss'
import { useLocalStorage } from 'react-use'
import Lightbox from './Lightbox'
import LikesByPhotographer from './LikesByPhotographer'

interface Filter {
  name: string
  fr: string
}

export default function MediaGrid() {
  const [open, setOpen] = useState(false)

  const filters: Filter[] = [
    {
      name: 'popularity',
      fr: 'Popularité'
    },
    {
      name: 'title',
      fr: 'Titre'
    },
    {
      name: 'date',
      fr: 'Date'
    }
  ]

  const [sortedMedia, setSortedMedia] = useState<IMedia[]>([])
  const [currentFilterName, setCurrentFilterName] = useLocalStorage(
    'name',
    'date'
  )
  const [currentFilterFr, setCurrentFilterFr] = useLocalStorage('fr', 'Date')
  const router = useRouter()

  useEffect(() => {
    filteringMedia()
  }, [currentFilterName])

  const filteringMedia = async () => {
    const photographerId = parseInt(router.query.id as string)

    const response = await fetch(
      `/api/photographer/${photographerId}/media?filter=${currentFilterName}`
    )

    const data: MediaApi[] = await response.json()
    const sortedMedia = data.map(MediaFactory.createMedia)

    setSortedMedia(sortedMedia)
  }

  const totalMediaLike = useMemo(
    () => sortedMedia.reduce((acc, curr) => acc + curr.like, 0),
    [sortedMedia]
  )

  const handleLikeChange = (media: IMedia) => {
    setSortedMedia(
      sortedMedia.map((m) => (m.id === media.id ? { ...m, ...media } : m))
    )
  }

  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  if (router.query.media) {
    return <Lightbox />
  }

  return (
    <div className={styles.mediaSection}>
      <div className={styles.filterSection}>
        <div className={styles.label}>
          <p className={styles.title}>Trier par</p>
        </div>
        <div>
          <button
            tabIndex={0}
            aria-label="Media filter"
            role={'menu'}
            className={button.dropdownButton}
            onClick={() => {
              setOpen(!open)
              const isOpen = !open
              const filterBtn: HTMLButtonElement = document.querySelector(
                `.${button.dropdownButton}`
              )!
              isOpen
                ? (filterBtn.style.borderRadius = '5px 5px 0 0')
                : (filterBtn.style.borderRadius = '5px')
            }}
            onKeyUp={(event) => {
              if (event.key === 'Escape') {
                setOpen(false)
              }
            }}>
            {currentFilterFr}
            {open ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {open && (
            <ul role="menuitem" className={dropdown.menu}>
              {filters
                .filter((filter) => filter.fr !== currentFilterFr)
                .map((filter) => (
                  <li
                    key={filter.name}
                    role={'menuitem'}
                    tabIndex={0}
                    onClick={() => {
                      setCurrentFilterName(filter.name)
                      setCurrentFilterFr(filter.fr)
                      router.push(`${router.query.id}?filter=${filter.name}`)

                      setOpen(false)
                    }}
                    onKeyUp={(event) => {
                      if (event.key === 'Escape') {
                        setOpen(false)
                        const dropdownBtn: HTMLButtonElement =
                          document.querySelector(`.${button.dropdownButton}`)!
                        dropdownBtn.focus()
                      }
                      if (event.key === 'Enter') {
                        setCurrentFilterName(filter.name)
                        setCurrentFilterFr(filter.fr)
                        router.push(`${router.query.id}?filter=${filter.name}`)
                        const dropdownBtn: HTMLButtonElement =
                          document.querySelector(`.${button.dropdownButton}`)!
                        dropdownBtn.focus()

                        setOpen(false)
                      }
                    }}>
                    {filter.fr}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.mediaGrid}>
        {sortedMedia
          ? sortedMedia.map((media) => (
              <div key={media.id}>
                <MediaCard onLikeChange={handleLikeChange} media={media} />
              </div>
            ))
          : ''}
      </div>
      <LikesByPhotographer totalLike={totalMediaLike} />
    </div>
  )
}
