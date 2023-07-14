import { cardMaker } from "./cards"
import { listMaker } from "./lists";
import './static/style.css'


// What should happen on page load?
//read appropriate parent list of item from local storage... make object with it with cardMaker(localstorageparent, localstoragename, etc...) ok i can do that


// iterate over local storage: 

const selectListElement = document.createElement('select')
selectListElement.classList.add('list-select')
const defaultOption = document.createElement('option')
defaultOption.innerHTML = 'Project'
selectListElement.appendChild(defaultOption)
document.body.insertBefore(selectListElement, document.querySelector('.list-wrapper'))

for (let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    const testObject = JSON.parse(localStorage.getItem(key))
    //if type is todo, cardMaker(testObject)
    if (testObject['title']) {
        console.log(testObject)
        cardMaker(testObject).createElement() 
    }
    if (testObject['name']) {
        listMaker(testObject).createElement()
    }
  }
  



const cardMakingBtn = document.querySelector('button.make-card-btn')
cardMakingBtn.addEventListener('click', processCardFormInput)


const makeListBtn = document.querySelector('button.make-list-btn')
makeListBtn.addEventListener('click', processListFormInput)


function processCardFormInput(event) {
    event.preventDefault()
    const titleInput = document.querySelector('input#task-title')
    const titleName = titleInput.value
    if (!titleName) return
    titleInput.value = ''
    //shouldn't append to body though! it should append to fitting container which would be dynamic
    //const parentCategory = value of select element
    const parent = document.querySelector('select').value
    //
    console.log(parent)
    const cardObj = cardMaker({title: titleName, parent})
    if (localStorage.getItem(`${cardObj.title} todo`)) {
        throw new Error('This todo already exists')
    }
    cardObj.createElement()
}


function processListFormInput(event) {
    event.preventDefault()
    const listInput = document.querySelector('input#list-title')
    const listName = listInput.value
    listInput.value = ''
    if (!listName) return
    const listObj = listMaker({name: listName})

    if (localStorage.getItem(`${listObj.name} list`)) {
        throw new Error('This list category already exists')
    }

    listObj.createElement()
}



