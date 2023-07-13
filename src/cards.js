import { translateCardToDOM } from "./dom"

export function cardMaker(title, description, dueDate, priority, status) {
    let newCard = {title, description, dueDate, priority, status, updateTitle}
    function updateTitle(newName) {
        newCard.title = newName
    }

    const returnedCard = Object.assign(newCard, domCardMethodAdder(newCard))
    return returnedCard

}

const domCardMethodAdder = (state) => {
    return {createCard: translateCardToDOM(state)}
    
}


//card methods
