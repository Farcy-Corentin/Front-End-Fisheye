import {
  IPhotographer,
  PhotographerApi,
  PhotographerProfileView
} from '../interfaces/IPhotographer'

function formatPrice(price: number): string {
  return price + '€/jour'
}

function makePortrait(portrait: string): string {
  return `/assets/photographers/${portrait}`
}

export class PhotographerFactory {
  static createPhotographer(photographerApi: PhotographerApi): IPhotographer {
    return {
      id: photographerApi.id,
      name: photographerApi.name,
      city: photographerApi.city,
      country: photographerApi.country,
      tagline: photographerApi.tagline,
      price: photographerApi.price,
      portrait: photographerApi.portrait
    }
  }

  static createPhotographerProfileView(
    photographer: IPhotographer
  ): PhotographerProfileView {
    return {
      id: photographer.id,
      name: photographer.name,
      picture: makePortrait(photographer.portrait),
      address: photographer.city + ', ' + photographer.country,
      tagline: photographer.tagline,
      formattedPrice: formatPrice(photographer.price)
    }
  }
}
