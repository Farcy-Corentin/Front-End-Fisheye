export interface MediaApi {
  id: number
  photographerId: number
  title: string
  image?: string
  video?: string
  likes: number
  date: Date
  price: number
}

export interface IMedia {
  id: number
  photographerId: number
  title: string
  componentType: string | undefined
  url: string
  like: number
  date: Date
  price: number
}

export interface Picture extends Omit<IMedia, 'componentType'> {}

export interface Video extends Omit<IMedia, 'componentType'> {}
