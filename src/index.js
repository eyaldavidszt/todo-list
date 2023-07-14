import { cardMaker } from "./cards"
import { translateCardToDOM, translateListToDOM } from "./dom";
import { listMaker } from "./lists";
import './static/style.css'


//dynamically create a select menu when pageLoad and edit it when new list is made, of possible lists. 
const selectListElement = document.createElement('select')
const defaultOption = document.createElement('option')
defaultOption.innerHTML = 'Projects'
selectListElement.appendChild(defaultOption)
document.body.insertBefore(selectListElement, document.querySelector('.list-wrapper'))


function processCardFormInput(event) {
    event.preventDefault();
    const titleInput = document.querySelector('input#task-title')
    const titleName = titleInput.value
    if (!titleName) return
    titleInput.value = ''
    const cardObj = cardMaker(titleName)
    cardObj.appendToLocal()
    //shouldn't append to body though! it should append to fitting container which would be dynamic
    const projects = document.querySelector('.list-wrapper')
    projects.appendChild(cardObj.createElement())
    // appropriate pick 
}


const makeCardBtn = document.querySelector('button.make-card-btn')
makeCardBtn.addEventListener('click', processCardFormInput)


const makeListBtn = document.querySelector('button.make-list-btn')
makeListBtn.addEventListener('click', processListFormInput)


function processListFormInput(event) {
    event.preventDefault()
    const listInput = document.querySelector('input#list-title')
    const listName = listInput.value
    listInput.value = ''
    if (!listName) return
    const listObj = listMaker(listName)
    listObj.appendToLocal()
    document.body.appendChild(listObj.createElement())
}


