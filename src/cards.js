export function cardMaker(title, description, dueDate, priority, status) {
    let newCard = {title, description, dueDate, priority, status, updateTitle, createElement, appendToLocal}


    function updateTitle(newName) {
        newCard.title = newName
    }


    function createElement() {
        const cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card-wrapper')
        cardWrapper.innerHTML = `${newCard.title}`
        return cardWrapper
    }


    function appendToLocal() {
        return localStorage.setItem(newCard.title, 0)
    }


    return newCard


}


//card methods
