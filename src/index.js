import { cardMaker } from "./cards"
import { translateCardToDOM, translateListToDOM } from "./dom";
import { totalLists, listMaker } from "./lists";
import './static/style.css'

    // test code:
    // if (!localStorage.getItem('myCat'))
    // {
    //     localStorage.setItem("myCat", '0');
    // }


//dynamically create a select menu when pageLoad and edit it when new list is made, of possible lists. 
const selectListElement = document.createElement('select')
const defaultOption = document.createElement('option')
defaultOption.innerHTML = 'Projects'
selectListElement.appendChild(defaultOption)
document.body.insertBefore(selectListElement, document.querySelector('.list-wrapper'))
// what else... 
// there needs to be some function that iterates over an existing list array and appends options to a select element. 


function processCardFormInput(event) {
    //makes card object from form input using cardMaker function 
    //makes dom object from card object using translatetoDOM function
    event.preventDefault();
    const titleInput = document.querySelector('input#task-title')
    const titleName = titleInput.value
    if (!titleName) return
    titleInput.value = ''
    const cardObj = cardMaker(titleName)
    //shouldn't append to body though! it should append to fitting container which would be dynamic
    const projects = document.querySelector('.list-wrapper')
    projects.appendChild(cardObj.createCard)
    // appropriate pick 
}


const makeCardBtn = document.querySelector('button.make-card-btn')
makeCardBtn.addEventListener('click', processCardFormInput)


//lists array where?
const makeListBtn = document.querySelector('button.make-list-btn')
makeListBtn.addEventListener('click', processListFormInput)


function processListFormInput(event) {
    event.preventDefault()
    const listInput = document.querySelector('input#list-title')
    const listName = listInput.value
    listInput.value = ''
    if (!listName) return
    //where's list object??
    const listObj = listMaker(listName)
    listObj.appendToLS
    // totalLists.push(listObj) don't think this is smart code, need to store objects in localStorage, not global array
    document.body.appendChild(listObj.createList)
}


