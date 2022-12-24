import { IPhotographer } from '../../interfaces/IPhotographer'
import { PhotographerFactory } from '../../factories/PhotographerFactory'
import Head from 'next/head'
import PhotographerHeader from '../../components/PhotographerHeader'
import MediaGrid from '../../components/MediaGrid'
import { getPhotographer } from '../api/photographer/[id]'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

interface Props {
  photographer: IPhotographer
}

export default function Photographer({ photographer }: Props) {
  const photographerProfileView =
    PhotographerFactory.createPhotographerProfileView(photographer)

  return (
    <>
      <Head>
        <title>Fisheye - photographe</title>
      </Head>
      <PhotographerHeader photographerProfileView={photographerProfileView} />
      <MediaGrid />
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.API_URL}/api/photographer`)
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

  return {
    props: {
      photographer
    }
  }
}
