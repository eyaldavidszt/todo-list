import {cardMaker} from "./cards"
import { translateToDOM } from "./dom";
import './static/style.css'


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
    const newList = document.createElement('div')
    newList.classList.add('list-wrapper')
    newList.innerHTML = `${listName}: `
    document.body.appendChild(newList)
}

