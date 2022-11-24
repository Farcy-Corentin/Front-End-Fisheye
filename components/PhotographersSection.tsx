import { IPhotographer } from '../interfaces/IPhotographer'
import { PhotographerFactory } from '../factories/PhotographerFactory'
import PhotographerProfile from './PhotographerProfile'

export default function PhotographersSection({
  photographer
}: {
  photographer: IPhotographer
}) {
  const photographerProfileView =
    PhotographerFactory.createPhotographerProfileView(photographer)

  return (
    <article>
      <PhotographerProfile
        id={photographerProfileView.id}
        url={photographerProfileView.url}
        name={photographerProfileView.name}
        picture={photographerProfileView.picture}
        address={photographerProfileView.address}
        tagline={photographerProfileView.tagline}
        formattedPrice={photographerProfileView.formattedPrice}
      />
    </article>
  )
}
