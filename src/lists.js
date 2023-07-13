import { translateListToDOM } from "./dom"
export function listMaker(name) {
    const newList = {name}
    const totalLists = []
    const returnedList = Object.assign(newList, domListMethodAdder(newList), localStorageMethodAdder(newList))
    return returnedList
}

const domListMethodAdder = (state) => {
    return {createList: translateListToDOM(state)}
}

const localStorageMethodAdder = (state) => {
    return {appendToLS: localStorage.setItem(state.name, 0)}
}