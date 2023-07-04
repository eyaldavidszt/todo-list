export function translateToDOM(card) {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('card-wrapper')
    cardWrapper.innerHTML = `${card.title}`
    return cardWrapper
}


//what do i want the dom to look like...?