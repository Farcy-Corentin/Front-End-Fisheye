import { IPhotographer } from '../../../interfaces/IPhotographer'
import { PhotographerFactory } from '../../../factories/PhotographerFactory'

import path from 'path'
import { promises as fs } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), 'data')
  const fileContents = await fs.readFile(
    jsonDirectory + '/photographers.json',
    'utf8'
  )

  const data = JSON.parse(fileContents)
  const photographer = data.photographers.find(
    (photographer: IPhotographer) =>
      photographer.id === parseInt(<string>req.query.id)
  )

  res.status(200).json(photographer)
}

export async function getPhotographer(id: string): Promise<IPhotographer> {
  const response = await fetch(`${process.env.API_URL}api/photographer/${id}`)
  const data = await response.json()

  return PhotographerFactory.createPhotographer(data)
}
