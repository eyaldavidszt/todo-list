import { listMaker } from "./lists"

export function cardMaker({title, description, dueDate, priority, status, parent}) {
    let newCard = {
        title, parent,
        description, dueDate, 
        priority, status, 
        updateTitle, createElement
    }

    
    function updateTitle(newName) {
        newCard.title = newName
    }


    function createElement() {
        
        const cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card-wrapper')
        cardWrapper.innerHTML = `${newCard.title}`
        const btn = document.createElement('button')
        btn.innerHTML = 'delete list'
        btn.addEventListener('click', () => {
            removeElement(cardWrapper)
        })
        cardWrapper.appendChild(btn)
        //append other stuff, maybe in internal functions.

        appendToLocal()
        const nodes = document.querySelectorAll('.list-wrapper')
        let parentNode
        for (let node of nodes) {
            if (node.innerHTML.trim().includes(parent)) {
                parentNode = node
            }
        }
        console.log(parentNode)
        if (!parentNode) {
            if (localStorage.getItem(`${parent} list`)) {
                parentNode = listMaker(parent).createElement()
            }
            else return    
        }
        parentNode.appendChild(cardWrapper)
    }


    function appendToLocal() {
        return localStorage.setItem(`${newCard.title} todo`, JSON.stringify({
            title: newCard.title,
            parent: newCard.parent, 
            description: newCard.description,

        }))
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
