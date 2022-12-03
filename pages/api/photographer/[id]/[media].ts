import path from 'path'
import {promises as fs} from 'fs'
import {NextApiRequest, NextApiResponse} from 'next'
import {IMedia, MediaApi} from '../../../../interfaces/IMedia'
import {MediaFactory} from '../../../../factories/MediaFactory'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(jsonDirectory + '/media.json', 'utf8')

  const data = JSON.parse(fileContents)
  const media = data.media.filter(
    (mediaEl: IMedia) =>
      mediaEl.photographerId === parseInt(<string>req.query.id)
  )

  res.status(200).json(media)
}

export async function getMediaByPhotographer(id: string): Promise<IMedia> {
  const response = await fetch(
    `${process.env.API_URL}/api/photographer/${id}/media`
  )
  const data = await response.json()

  const mediaData = data.filter(
    (mediaEl: IMedia) => mediaEl.photographerId === parseInt(id)
  )

  return mediaData.map((mediaEl: MediaApi) =>
      MediaFactory.createMedia(mediaEl)
  )
}
