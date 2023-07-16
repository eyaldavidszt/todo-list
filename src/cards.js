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
        cardWrapper.classList.add(`${newCard.title}`)
        cardWrapper.appendChild(titleWrapper)
        const btn = document.createElement('button')
        btn.classList.add('todo-delete-btn')
        btn.innerHTML = 'delete'
        btn.addEventListener('click', () => {
            removeElement(cardWrapper)
        })
        const editBtn = document.createElement('button')
        editBtn.classList.add('todo-edit-btn')
        editBtn.innerHTML = 'edit'
        editBtn.addEventListener('click',  () => {
            //create form dynamically
            //submitting the form triggers 'editElement' function which edits obj, dom, and localStorage
            const editDialog = document.createElement('dialog')
            const editForm = document.createElement('form')
            editForm.setAttribute('method', 'dialog')
            //  create children for form:
                const editFormLabel = document.createElement('label')
                editFormLabel.setAttribute('for', 'task-title-edit')
                const editFormInput = document.createElement('input')
                editFormInput.setAttribute('type', 'text')
                editFormInput.setAttribute('id', 'task-title-edit')
                editFormInput.setAttribute('placeholder', 'title')
                editFormInput.setAttribute('autocomplete', 'off')
                //add more inputs like date, importance
                const editFormSubmit = document.createElement('button')
                editFormSubmit.setAttribute('class', 'edit-todo-btn')
                editFormSubmit.innerHTML = 'submit'
                editFormSubmit.addEventListener('click', () => {
                    //function to process form and send it into editElement()
                    
                })

            //
            editDialog.appendChild(editForm)
            document.body.appendChild(editDialog)
            editDialog.showModal()

            editDialog.addEventListener("click", e => {
                const dialogDimensions = editDialog.getBoundingClientRect()
                if (
                  e.clientX < dialogDimensions.left ||
                  e.clientX > dialogDimensions.right ||
                  e.clientY < dialogDimensions.top ||
                  e.clientY > dialogDimensions.bottom
                ) {
                  editDialog.remove()
                }
              })
        })
        const parentDiv = document.createElement('div')
        parentDiv.textContent = parent
        parentDiv.classList.add('parent')
        cardWrapper.appendChild(parentDiv)
        cardWrapper.appendChild(btn)
        cardWrapper.appendChild(editBtn)
        //append other stuff, maybe in internal functions.

        appendToLocal()
        const todosWrapper = document.querySelector('.todos-wrapper')
        todosWrapper.appendChild(cardWrapper)
    }

    function editElement() {
        
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
