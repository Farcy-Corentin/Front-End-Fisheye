import Head from 'next/head'
import { PhotographerApi, IPhotographer } from '../interfaces/IPhotographer'
import { PhotographerFactory } from '../factories/PhotographerFactory'
import PhotographersSection from '../components/PhotographersSection'
import styles from '../styles/pages/Home.module.scss'

interface Props {
  photographersData: PhotographerApi[]
}

export default function Home({ photographersData }: Props) {
  const photographers: IPhotographer[] = photographersData.map((data) =>
    PhotographerFactory.createPhotographer(data)
  )

  return (
    <>
      <Head>
        <title>Fisheye</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.photographer_section}>
        {photographers.map((photographer) => (
          <PhotographersSection
            key={photographer.id}
            photographer={photographer}
          />
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/api/photographer`)
  const data = await response.json()
  const photographersData = data.photographers

  return {
    props: {
      photographersData
    }
  }
}
