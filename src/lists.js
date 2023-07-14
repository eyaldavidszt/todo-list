export function listMaker(name) {
    const newList = {name, createElement, appendToLocal}

    
    function createElement() {
        const listWrapper = document.createElement('div')
        listWrapper.classList.add('list-wrapper')
        listWrapper.innerHTML = `${newList.name}: `
        const btn = document.createElement('button')
        btn.innerHTML = 'delete list'
        btn.addEventListener('click', () => {
            listWrapper.remove()
        })
        listWrapper.appendChild(btn)
        return listWrapper
    }


    function appendToLocal() {
        return localStorage.setItem(newList.name, 0)
    }


    return newList
}