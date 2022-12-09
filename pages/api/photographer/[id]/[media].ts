import path from 'path'
import { promises as fs } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { IMedia, MediaApi } from '../../../../interfaces/IMedia'
import { MediaFactory } from '../../../../factories/MediaFactory'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(jsonDirectory + '/media.json', 'utf8')

  const data = JSON.parse(fileContents)
  const { id, filter } = req.query
  const media = data.media.filter(
    (mediaEl: IMedia) => mediaEl.photographerId === parseInt(<string>id)
  )

  if (filter === 'title') {
    const sortedMedia = media
      .map((item: IMedia) => {
        return item
      })
      .sort((prev: { title: string }, curr: { title: string }) => {
        return prev.title.localeCompare(curr.title)
      })
    return res.status(200).json(sortedMedia)
  }

  if (filter === 'date') {
    const sortedMedia = media
      .map((item: IMedia) => {
        return item
      })
      .sort((prev: { date: string }, curr: { date: string }) => {
        return curr.date.localeCompare(prev.date)
      })
    return res.status(200).json(sortedMedia)
  }

  if (filter === 'popularity') {
    const sortedMedia = media
      .map((item: IMedia) => {
        return item
      })
      .sort((prev: { likes: number }, curr: { likes: number }) => {
        return curr.likes - prev.likes
      })
    return res.status(200).json(sortedMedia)
  }

  res.status(200).json(
    media
      .map((item: IMedia) => {
        return item
      })
      .sort((prev: { date: string }, curr: { date: string }) => {
        return curr.date.localeCompare(prev.date)
      })
  )
}

export async function getMediaByPhotographer(
  id: string,
  filter: string
): Promise<IMedia> {
  const response = await fetch(
    `${process.env.API_URL}/api/photographer/${id}/media`
  )
  const data = await response.json()

  const mediaData = data.filter(
    (mediaEl: IMedia) => mediaEl.photographerId === parseInt(id)
  )

  return mediaData.map((mediaEl: MediaApi) => MediaFactory.createMedia(mediaEl))
}

export async function getFilteredMedia(
  photographerId: number,
  filter: string
): Promise<IMedia[]> {
  const response = await fetch(
    `${process.env.API_URL}/api/photographer/${photographerId}/media?filter=${filter}`
  )
  const data: MediaApi[] = await response.json()

  return data.map(MediaFactory.createMedia)
}
