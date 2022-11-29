import { IMedia } from '../interfaces/IMedia'

interface Props {
  mediaData?: IMedia[]
  photographerId: number
}

export default function MediaGrid({ mediaData }: Props) {
  return <></>
}

export async function getStaticProps(id: string) {
  const response = await fetch(`${process.env.API_URL}api/media/${id}`)
  const data = await response.json()
  const mediaData = data

  return {
    props: {
      mediaData
    }
  }
}
