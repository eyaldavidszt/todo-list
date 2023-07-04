import {cardMaker} from "./cards"

console.log(cardMaker);

const btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const titleName = document.querySelector('input#title').value
})