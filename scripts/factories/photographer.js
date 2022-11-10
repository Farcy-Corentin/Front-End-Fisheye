function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const articleEl = document.createElement('article')

    const portraitEl = document.createElement('img')
    portraitEl.setAttribute('src', picture)

    const nameEl = document.createElement('h2')
    nameEl.textContent = name

    const cityWithCountryEl = document.createElement('p')
    cityWithCountryEl.textContent = `${city}, ${country}`

    const taglineEl = document.createElement('p')
    taglineEl.textContent = tagline

    const priceEl = document.createElement('p')
    priceEl.textContent = `${price}€/jour`

    articleEl.appendChild(portraitEl)
    articleEl.appendChild(nameEl)
    articleEl.appendChild(cityWithCountryEl)
    articleEl.appendChild(taglineEl)
    articleEl.appendChild(priceEl)
    return articleEl
  }
  return { name, picture, getUserCardDOM }
}
