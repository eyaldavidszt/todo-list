export function cardMaker(title, description, dueDate, priority, status) {
    let newCard = {title, description, dueDate, priority, status, updateTitle, createElement}


    function updateTitle(newName) {
        newCard.title = newName
    }


    function createElement() {
        const cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card-wrapper')
        cardWrapper.innerHTML = `${newCard.title}`
        appendToLocal()
        return cardWrapper
    }


    function appendToLocal() {
        return localStorage.setItem(`${newCard.title} todo`, 0)
    }


    function removeFromLocal() {
        return localStorage.removeItem(`${newCard.title} todo`)
    }


    function removeElement(item) {
        item.remove()
        removeFromLocal()
        newCard = null
    }


    return newCard
}


//card methods
