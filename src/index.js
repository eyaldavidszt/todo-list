import {cardMaker} from "./cards"
import { translateToDOM } from "./dom";


const btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const titleInput = document.querySelector('input#title')
    const titleName = titleInput.value
    titleInput.value = ''
    const obj = cardMaker(titleName);
    const DOMCard = translateToDOM(obj)
    document.body.appendChild(DOMCard)
})