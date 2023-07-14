import { cardMaker } from "./cards"
import { listMaker } from "./lists";
import './static/style.css'


//dynamically create a select menu when pageLoad and edit it when new list is made, of possible lists.
//options should be read from localStorage
const selectListElement = document.createElement('select')
selectListElement.classList.add('list-select')
const defaultOption = document.createElement('option')
defaultOption.innerHTML = 'Projects'
selectListElement.appendChild(defaultOption)
document.body.insertBefore(selectListElement, document.querySelector('.list-wrapper'))


const cardMakingBtn = document.querySelector('button.make-card-btn')
cardMakingBtn.addEventListener('click', processCardFormInput)


const makeListBtn = document.querySelector('button.make-list-btn')
makeListBtn.addEventListener('click', processListFormInput)


function processCardFormInput(event) {
    event.preventDefault();
    const titleInput = document.querySelector('input#task-title')
    const titleName = titleInput.value
    if (!titleName) return
    titleInput.value = ''
    const cardObj = cardMaker(titleName)
    //shouldn't append to body though! it should append to fitting container which would be dynamic
    //const parentCategory = value of select element
    const parentCategory = document.querySelector('.list-wrapper')
    parentCategory.appendChild(cardObj.createElement())
    // appropriate pick 
}


function processListFormInput(event) {
    event.preventDefault()
    const listInput = document.querySelector('input#list-title')
    const listName = listInput.value
    listInput.value = ''
    if (!listName) return
    const listObj = listMaker(listName)
    document.body.appendChild(listObj.createElement())
}