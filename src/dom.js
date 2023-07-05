export function translateCardToDOM(card) {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('card-wrapper')
    cardWrapper.innerHTML = `${card.title}`
    return cardWrapper
}

export function translateListToDom(list) {
    const listWrapper = document.createElement('div')
    listWrapper.classList.add('list-wrapper')
    // listWrapper.classList.add(`list-wrapper-${}`)
    //test code:
    const newValue = parseInt(localStorage.getItem("myCat")) + 1;
    localStorage.setItem("myCat", `${newValue}`);
    //
    listWrapper.innerHTML = `${list.name}: `
    const btn = document.createElement('button')
    btn.innerHTML = 'delete list'
    btn.addEventListener('click', () => {
        listWrapper.remove()
    })
    listWrapper.appendChild(btn)
    return listWrapper
}


export function translateListToOption(list) {
    const content = list.name

    return
}


//^should i identify in DOM each list category? if so, how?

