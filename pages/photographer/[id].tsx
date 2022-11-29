import { IPhotographer } from '../../interfaces/IPhotographer'
import { PhotographerFactory } from '../../factories/PhotographerFactory'
import Head from 'next/head'
import PhotographerHeader from '../../components/PhotographerHeader'
import MediaGrid from '../../components/MediaGrid'
import { getPhotographer } from '../api/photographer/[id]'

interface Props {
  photographer: IPhotographer
}

export default function Photographer({ photographer }: Props) {
  console.log('test', photographer)
  const photographerProfileView =
    PhotographerFactory.createPhotographerProfileView(photographer)

  return (
    <>
      <Head>
        <title>Fisheye - photographe</title>
      </Head>
      <PhotographerHeader photographerProfileView={photographerProfileView} />
      <MediaGrid photographerId={photographerProfileView.id}></MediaGrid>
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/photographer')
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

export async function getStaticProps({ params }) {
  const id = params.id
  const photographer = await getPhotographer(id)

  return {
    props: {
      photographer
    }
  }
}
