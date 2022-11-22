export interface PhotographerApi {
  id: number
  name: string
  city: string
  country: string
  tagline: string
  price: number
  portrait: string
}

export interface IPhotographer {
  id: number
  name: string
  city: string
  country: string
  tagline: string
  price: number
  portrait: string
}

export interface PhotographerProfileView {
  id: number
  name: string
  picture: string
  address: string
  tagline: string
  formattedPrice: string
}
