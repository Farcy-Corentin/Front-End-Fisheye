import {
  IPhotographer,
  PhotographerApi,
  PhotographerProfileView
} from '../interfaces/IPhotographer'
import Photographer from '../pages/photographer/[id]'

function formatPrice(price: number): string {
  return price + '€/jour'
}

function makePortrait(portrait: string): string {
  return `/assets/photographers/${portrait}`
}

function url(id: number) {
  return `/photographer/${id}`
}

export class PhotographerFactory {
  static createPhotographer(
    photographerApi: PhotographerApi | undefined
  ): IPhotographer {
    if (photographerApi === undefined) {
      throw new Error("Il n'y a aucun photographe.")
    }

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
      url: url(photographer.id),
      name: photographer.name,
      picture: makePortrait(photographer.portrait),
      address: photographer.city + ', ' + photographer.country,
      tagline: photographer.tagline,
      formattedPrice: formatPrice(photographer.price)
    }
  }
}
