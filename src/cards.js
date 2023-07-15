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
        const titleWrapper = document.createElement('div')
        titleWrapper.classList.add('task-title')
        titleWrapper.innerHTML = `${newCard.title}`
        cardWrapper.appendChild(titleWrapper)
        const btn = document.createElement('button')
        btn.innerHTML = 'delete todo'
        btn.addEventListener('click', () => {
            removeElement(cardWrapper)
        })
        const parentDiv = document.createElement('div')
        parentDiv.textContent = parent
        parentDiv.classList.add('parent')
        cardWrapper.appendChild(parentDiv)
        cardWrapper.appendChild(btn)
        //append other stuff, maybe in internal functions.

        appendToLocal()
        //
        // const nodes = document.querySelectorAll('.list-wrapper')
        // let parentNode
        // for (let node of nodes) {
        //     if (node.innerHTML.trim().includes(parent)) {
        //         parentNode = node
        //     }
        // }
        // if (!parentNode) {
        //     if (localStorage.getItem(`${parent} list`)) {
        //         parentNode = listMaker({name: parent}).createElement()
        //     }
        //     else return    
        // }
        // parentNode.appendChild(cardWrapper)
        //
        const todosWrapper = document.querySelector('.todos-wrapper')
        todosWrapper.appendChild(cardWrapper)
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
