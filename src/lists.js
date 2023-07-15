export function listMaker({name}) {
    let newList = {name, createElement}

    
    function createElement() {
            

        const listWrapper = document.createElement('div')
        listWrapper.classList.add('list-wrapper')
        listWrapper.innerHTML = `${newList.name}`
        const btn = document.createElement('button')
        btn.innerHTML = 'delete list'
        btn.addEventListener('click', () => {
            removeElement(listWrapper)
        })
        listWrapper.appendChild(btn)

        appendToLocal()
        createDOMOption()
        document.body.appendChild(listWrapper)
        return 
    }


    function appendToLocal() {
        return localStorage.setItem(`${newList.name} list`, JSON.stringify({name: newList.name, }))
    }
    
    function removeFromLocal() {
        localStorage.removeItem(`${newList.name} list`)
    }

    function removeChildrenFromLocal() {
        let temp;
        for (let i = 0; i < localStorage.length; i++) {
            //now i have the value of each localstorage
            temp = localStorage.getItem(localStorage.key(i))
            temp = JSON.parse(temp)
            if (temp.parent == newList.name) {
                //remove
                localStorage.removeItem(localStorage.key(i))
            }
        }
    }

    function createDOMOption() {
        const option = document.createElement('option')
        option.value = newList.name
        option.innerHTML = newList.name
        const select = document.querySelector('.list-select')
        select.appendChild(option)
    }

    function removeDOMOption() {
        const text = `${newList.name}`
        const nodeList = document.querySelectorAll('option')
        console.log(nodeList)
        for (let node of nodeList) {
            if (node.value == text) {
                console.log(text)
                node.remove()
            }
        }
    }


    function removeElement(item) {
        removeChildrenFromLocal()
        removeDOMOption()
        item.remove()
        removeFromLocal()
        newList = null
    }


    return newList
}