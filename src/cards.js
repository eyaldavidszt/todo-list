import { listMaker } from "./lists"

export function cardMaker({title, description, dueDate, priority, status, parent}) {
    let newCard = {
        title, parent,
        description, dueDate, 
        priority, status, 
        updateTitle, createElement, editElement
    }

    
    function updateTitle(newName) {
        newCard.title = newName
    }


    function createElement() {
        
        const cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card-wrapper')
        cardWrapper.setAttribute(`data-title`, `${newCard.title}`)
        const titleWrapper = document.createElement('div')
        titleWrapper.classList.add('task-title')
        titleWrapper.innerHTML = `${newCard.title}`
        cardWrapper.appendChild(titleWrapper)
        //append date as well here:
        const dateWrapper = document.createElement('div')
        dateWrapper.classList.add('due-date')
        dateWrapper.textContent = `${newCard.dueDate}`
        cardWrapper.appendChild(dateWrapper)
        //
        const priorityWrapper = document.createElement('div')
        priorityWrapper.classList.add('priority')
        priorityWrapper.textContent = `${newCard.priority}`
        cardWrapper.appendChild(priorityWrapper)
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
                editFormLabel.textContent = 'edit'
                const editFormInput = document.createElement('input')
                editFormInput.setAttribute('type', 'text')
                editFormInput.setAttribute('id', 'task-title-edit')
                editFormInput.setAttribute('placeholder', 'title')
                editFormInput.setAttribute('autocomplete', 'off')
                editFormInput.value = `${newCard.title}`
                //add more inputs like date::::
                const editFormDateInput = document.createElement('input')
                editFormDateInput.setAttribute('type', 'date')
                editFormDateInput.setAttribute('id', 'task-date-edit')
                editFormDateInput.setAttribute('aria-label', 'task date')
                //
                //add more inputs like priority:::
                const editFormPrioritySelect = document.createElement('select')
                editFormPrioritySelect.setAttribute('id', 'task-priority-edit')
                editFormPrioritySelect.setAttribute('name', 'task-priority-edit')
                const editFormPrioritySelectLabel = document.createElement('label')
                editFormPrioritySelectLabel.setAttribute('for', 'task-priority-edit')
                editFormPrioritySelectLabel.innerHTML = 'Priority'
                //3 options: 
                    const optionLow = document.createElement('option')
                    optionLow.value = 'low'
                    optionLow.innerHTML = 'Low'
                    editFormPrioritySelect.appendChild(optionLow)
                    const optionMedium = document.createElement('option')
                    optionMedium.value = 'medium'
                    optionMedium.innerHTML = 'Medium'
                    editFormPrioritySelect.appendChild(optionMedium)
                    const optionHigh = document.createElement('option')
                    optionHigh.value = 'high'
                    optionHigh.innerHTML = 'High'
                    editFormPrioritySelect.appendChild(optionHigh)
                //
                const editFormParentList = document.createElement('select')
                editFormParentList.setAttribute('id', 'parent-list-edit')
                editFormParentList.setAttribute('aria-label', 'Parent list')
                const options = document.querySelectorAll('.parent-option')
                options.forEach(option => {
                    const clone = option.cloneNode()
                    clone.innerHTML = option.innerHTML
                    clone.value = option.value
                    editFormParentList.appendChild(clone)
                })
                //
                const editFormSubmit = document.createElement('button')
                editFormSubmit.setAttribute('class', 'edit-todo-btn')
                editFormSubmit.innerHTML = 'submit'
                editFormSubmit.addEventListener('click', (e) => {
                    e.preventDefault()
                    editDialog.close()
                    //function to process form and send it into editElement() and then delete node of dialog
                    const args = {}
                    const newTitle = {title: document.querySelector('input#task-title-edit').value}
                    Object.assign(args, newTitle)
                    const newPriority = {priority: document.querySelector('select#task-priority-edit').value}
                    Object.assign(args, newPriority)
                    //
                    const newDate = {dueDate: document.querySelector('input#task-date-edit').value}
                    Object.assign(args, newDate)
                    const newParent = {parent: document.querySelector('select#parent-list-edit').value}
                    Object.assign(args, newParent)
                    //
                    newCard.editElement(args)
                })
            editForm.appendChild(editFormLabel)
            editForm.appendChild(editFormInput)
            editForm.appendChild(editFormDateInput)
            editForm.appendChild(editFormPrioritySelectLabel)
            editForm.appendChild(editFormPrioritySelect)
            editForm.appendChild(editFormParentList)
            editForm.appendChild(editFormSubmit)

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
                    editDialog.replaceChildren()
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

    function editElement(args) {
        removeFromLocal()
        const nodeToEdit = document.querySelector(`[data-title='${newCard.title}']`)
        console.log(nodeToEdit)
        newCard.title = args.title
        newCard.priority = args.priority
        newCard.dueDate = args.dueDate
        newCard.parent = args.parent
        appendToLocal()
        nodeToEdit.querySelector('.task-title').textContent = newCard.title
        nodeToEdit.querySelector('.due-date').textContent = newCard.dueDate
        nodeToEdit.querySelector('.priority').textContent = newCard.priority
        nodeToEdit.querySelector('.parent').textContent = newCard.parent
        nodeToEdit.setAttribute('data-title', `${newCard.title}`)

    }


    function appendToLocal() {
        return localStorage.setItem(`${newCard.title} todo`, JSON.stringify({
            title: newCard.title,
            parent: newCard.parent, 
            dueDate: newCard.dueDate,
            priority: newCard.priority

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
