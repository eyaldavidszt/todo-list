export function translateCardToDOM(card) {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('card-wrapper')
    cardWrapper.innerHTML = `${card.title}`
    return cardWrapper
}

export function translateListToDom(list) {
    const listWrapper = document.createElement('div')
    listWrapper.classList.add('list-wrapper')
    listWrapper.innerHTML = `${list.name}: `
    const btn = document.createElement('button')
    btn.innerHTML = 'delete list'
    btn.addEventListener('click', () => {
        deleteNode(listWrapper)
    })
    listWrapper.appendChild(btn)
    return listWrapper

}

function deleteNode(listWrapper) {
    listWrapper.remove()
}
//what do i want the dom to look like...?