import { IPhotographer } from '../../../../interfaces/IPhotographer'
import { PhotographerFactory } from '../../../../factories/PhotographerFactory'

import path from 'path'
import { promises as fs } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import {IMedia} from "../../../../interfaces/IMedia";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const jsonDirectory = path.join(process.cwd(), 'data')
    const fileContents = await fs.readFile(
        jsonDirectory + '/[id].json',
        'utf8'
    )

    const data = JSON.parse(fileContents)
    const media = data.media.find(
        (mediaEl: IMedia) =>
            mediaEl.photographerId === parseInt(<string>req.query.photographerId)
    )

    res.status(200).json(fileContents)
}

export async function getPhotographer(id: string): Promise<IPhotographer> {
    const response = await fetch(`${process.env.API_URL}api/photographer/media/${id}`)
    const data = await response.json()

    return PhotographerFactory.createPhotographer(data)
}
