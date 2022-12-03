import { IMedia, MediaApi, Picture, Video } from '../interfaces/IMedia'

export function url(photographerId: number, url: string): string {
  return `/assets/images/${photographerId}/${url}`
}

export class MediaFactory {
  static createMedia(mediaApi: MediaApi): IMedia {
    return {
      id: mediaApi.id,
      photographerId: mediaApi.photographerId,
      title: mediaApi.title,
      componentType: mediaApi.image ? 'image' : 'video',
      url: mediaApi.image
        ? url(mediaApi.photographerId, mediaApi.image)
        : url(mediaApi.photographerId, mediaApi.video as string),
      like: mediaApi.likes,
      date: mediaApi.date,
      price: mediaApi.price
    }
  }

  static createPicture(media: IMedia): Picture {
    return {
      id: media.id,
      photographerId: media.photographerId,
      title: media.title,
      url: media.url,
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
      url: media.url,
      like: media.like,
      date: media.date,
      price: media.price
    }
  }
}
