export function listMaker(name) {
    let newList = {name, createElement}

    
    function createElement() {
        const listWrapper = document.createElement('div')
        listWrapper.classList.add('list-wrapper')
        listWrapper.innerHTML = `${newList.name}: `
        const btn = document.createElement('button')
        btn.innerHTML = 'delete list'
        btn.addEventListener('click', () => {
            removeElement(listWrapper)
        })
        listWrapper.appendChild(btn)

        appendToLocal()
        createDOMOption()
        return listWrapper
    }


    function appendToLocal() {
        return localStorage.setItem(`${newList.name} list`, 1)
    }

    function removeFromLocal() {
        return localStorage.removeItem(`${newList.name} list`)
    }


    function createDOMOption() {
        const option = document.createElement('option')
        option.value = newList.name
        option.innerHTML = newList.name
        const select = document.querySelector('.list-select')
        select.appendChild(option)
    }


    function removeElement(item) {
        item.remove()
        removeFromLocal()
        newList = null
    }


    return newList
}