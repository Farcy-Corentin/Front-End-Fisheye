import { IImage } from './IImage'

export interface MediaApi {
  id: number
  photographerId: number
  title: string
  type: string
  like: number
  date: Date
  price: number
}

export interface IMedia {
  id: number
  photographerId: number
  title: string
  type: string
  url: string
  like: number
  date: Date
  price: number
}

export interface Picture extends Omit<IMedia, 'type'> {}

export interface Video extends IMedia {
  type: string
}
