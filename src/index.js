import {cardMaker} from "./cards"
import { translateToDOM } from "./dom";
import './static/style.css'


function processFormInput(event) {
    //makes card object from form input using cardMaker function 
    //makes dom object from card object using translatetoDOM function
    event.preventDefault();
    const titleInput = document.querySelector('input#title')
    const titleName = titleInput.value
    if (!titleName) return
    titleInput.value = ''
    const obj = cardMaker(titleName)
    const DOMCard = translateToDOM(obj)
    document.body.appendChild(DOMCard)
}


const btn = document.querySelector('button')
btn.addEventListener('click', processFormInput)

