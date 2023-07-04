export function cardMaker(title, description, dueDate, priority, status) {
    const newCard = {title, description, dueDate, priority, status, updateTitle}
    function updateTitle(newName) {
        newCard.title = newName
    }
    return newCard
}


//card methods
