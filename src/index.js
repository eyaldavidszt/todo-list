import {cardMaker} from "./cards"
import { translateToDOM } from "./dom";
import './static/style.css'

//dynamically create a select menu when pageLoad and when new list is made, of possible lists. 
/*const selectListElement = document.createElement('select');
what else... 
hmm. 
well.
there needs to be some function that iterates over an existing list array and appends options to a select element. 


*/


function processCardFormInput(event) {
    //makes card object from form input using cardMaker function 
    //makes dom object from card object using translatetoDOM function
    event.preventDefault();
    const titleInput = document.querySelector('input#task-title')
    const titleName = titleInput.value
    if (!titleName) return
    titleInput.value = ''
    const obj = cardMaker(titleName)
    const DOMCard = translateToDOM(obj)

    //shouldn't append to body though! it should append to fitting container which would be dynamic
    const projects = document.querySelector('.list-wrapper')
    projects.appendChild(DOMCard)
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
    const DOMList = document.createElement('div')
    DOMList.classList.add('list-wrapper')
    DOMList.innerHTML = `${listName}: `
    document.body.appendChild(DOMList)
}

