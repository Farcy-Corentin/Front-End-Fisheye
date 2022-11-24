import { IPhotographer, PhotographerApi } from '../../interfaces/IPhotographer'
import { PhotographerFactory } from '../../factories/PhotographerFactory'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import PhotographerHeader from '../../components/PhotographerHeader'

interface Props {
  photographersData: PhotographerApi[]
}

export default function Photographer({ photographersData }: Props) {
  const router = useRouter()
  const url: ParsedUrlQuery = router.query
  const id = parseInt(url!.id!.toString())

  const photographer = PhotographerFactory.createPhotographer(
    photographersData.find((data) => data.id === id)
  )
  const photographerProfileView =
    PhotographerFactory.createPhotographerProfileView(photographer)

  return (
    <>
      <Head>
        <title>Fisheye - photographe</title>
      </Head>
      <PhotographerHeader photographerProfileView={photographerProfileView} />
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/photographers')
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

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/photographers')
  const data = await response.json()
  const photographersData = data.photographers

  return {
    props: {
      photographersData
    }
  }
}
