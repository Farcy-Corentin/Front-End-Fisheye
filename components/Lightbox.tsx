import styles from '../styles/components/Lightbox.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import {IMedia, MediaApi} from "../interfaces/IMedia";
import {useEffect, useState} from "react";
import {MediaFactory} from "../factories/MediaFactory";
import Image from "next/image";
export default function Lightbox() {
    const router = useRouter()
    const photographerId = router.query.id
    const mediaId = router.query.media

    const [media, setMedia] = useState<IMedia[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentMediaIndex, setCurrentMediaIndex] = useState<number>(() => 0)

    const fetchMedia = async () => {
        const photographerId = parseInt(router.query.id as string)
        const defaultFilter = 'title'
        const currentFilterName = localStorage.getItem('name') ? localStorage.getItem('name') : defaultFilter

        const response = await fetch(
            `/api/photographer/${photographerId}/media?filter=${currentFilterName}`
        )

        const data: MediaApi[] = await response.json()
        const mediaData = data.map(MediaFactory.createMedia)

        setMedia(mediaData)
        setCurrentMediaIndex(mediaData.findIndex((media) => media.id == parseInt(mediaId as string)))
        setIsLoading(true)
    }
    const prev = async () => {
        const isFirstMedia = currentMediaIndex === 0
        const prevIndex = isFirstMedia ? media.length - 1 : currentMediaIndex - 1

        await router.push(`/photographer/${photographerId}/?media=${media[prevIndex].id}`)
        setCurrentMediaIndex(prevIndex)
    }
    const next = async () => {
        const isNextMedia = currentMediaIndex === media.length - 1
        const nextIndex = isNextMedia ? 0 : currentMediaIndex + 1

        await router.push(`/photographer/${photographerId}/?media=${media[nextIndex].id}`)
        setCurrentMediaIndex(nextIndex)
    }

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        fetchMedia()
    }, [])

    document.addEventListener('keyup', (e) => e.key === 'ArrowRight' ? next() : null)

    if (!hasMounted) {
        return null
    }

    if (!isLoading) {
        return null
    }

    if (media[currentMediaIndex]?.componentType === 'image') {
        const picture = MediaFactory.createPicture(media[currentMediaIndex])
        return (
            <div className={styles.overlay}>
                <button className={styles.previousBtn} onClick={prev}>{'<'}</button>
                <div className={styles.content}>
                    <Image src={picture.url} alt={picture.title} fill={true} priority={true} style={{
                        objectFit: 'cover'
                    }}/>
                    <p className={styles.title}>{picture.title}</p>
                </div>
                <Link className={styles.closeBtn} href={`/photographer/${photographerId}`}>
                    X
                </Link>
                <button className={styles.nextBtn} onClick={next}>{'>'}</button>
            </div>
        )
    }

    const video = MediaFactory.createMovie(media[currentMediaIndex])

    return (
        <div className={styles.overlay}>
            <button className={styles.previousBtn} onClick={prev}>{'<'}</button>
            <div className={styles.content}>
                <video src={video.url} controls={true}/>
                <p className={styles.title}>{video.title}</p>
            </div>
            <Link className={styles.closeBtn} href={`/photographer/${photographerId}`}>
                X
            </Link>
            <button className={styles.nextBtn} onClick={next}>{'>'}</button>
        </div>
    )
}
