import {cardMaker} from "./cards"
import { translateToDOM } from "./dom";
import './static/style.css'


function processFormInput(event) {
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
    const projects = document.querySelector('.projects')
    projects.appendChild(DOMCard)
}


const makeCardBtn = document.querySelector('button.make-card-btn')
makeCardBtn.addEventListener('click', processFormInput)

