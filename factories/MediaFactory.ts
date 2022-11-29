import { IMedia, MediaApi, Picture, Video } from '../interfaces/IMedia'

export function url(photographerId: number, url: string): string {
  return `/assets/images/${photographerId}/${url}`
}

export function type(type: string) {
  return Object.keys(type)
}

export class MediaFactory {
  static createMedia(mediaApi: MediaApi): IMedia {
    return {
      id: mediaApi.id,
      photographerId: mediaApi.photographerId,
      title: mediaApi.title,
      type: mediaApi.type,
      url: url(mediaApi.photographerId, mediaApi.type),
      like: mediaApi.like,
      date: mediaApi.date,
      price: mediaApi.price
    }
  }

  static createPicture(media: IMedia): Picture {
    return {
      id: media.id,
      photographerId: media.photographerId,
      title: media.title,
      url: url(media.photographerId, media.type),
      like: media.like,
      date: media.date,
      price: media.price
    }
  }

  static createMovie(media: IMedia): Video {
    return {
      id: media.id,
      photographerId: media.photographerId,
      title: media.title,
      type: 'video/mp4',
      url: url(media.photographerId, media.type),
      like: media.like,
      date: media.date,
      price: media.price
    }
  }
}
