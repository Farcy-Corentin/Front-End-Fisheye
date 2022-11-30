import { IPhotographer } from '../../interfaces/IPhotographer'
import { PhotographerFactory } from '../../factories/PhotographerFactory'
import Head from 'next/head'
import PhotographerHeader from '../../components/PhotographerHeader'
import MediaGrid from '../../components/MediaGrid'
import { getPhotographer } from '../api/photographer/[id]'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getMediaByPhotographer } from '../api/photographer/[id]/[media]'
import { IMedia } from '../../interfaces/IMedia'

interface Props {
  photographer: IPhotographer
  media: IMedia[]
}

export default function Photographer({ photographer, media }: Props) {
  const photographerProfileView =
    PhotographerFactory.createPhotographerProfileView(photographer)

  return (
    <>
      <Head>
        <title>Fisheye - photographe</title>
      </Head>
      <PhotographerHeader photographerProfileView={photographerProfileView} />
      <MediaGrid media={media}></MediaGrid>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}api/photographer`)
  const data = await response.json()
  const photographersData = data.photographers

  const paths = photographersData.map((data: IPhotographer) => ({
    params: { id: data.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: Params) {
  const id = params.id

  const photographer = await getPhotographer(id)
  const media = await getMediaByPhotographer(id)

  return {
    props: {
      photographer,
      media
    }
  }
}
