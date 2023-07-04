export function translateToDOM(card) {
    const cardWrapper = document.createElement('div')
    cardWrapper.innerHTML = `${card.title}`
    return cardWrapper
}