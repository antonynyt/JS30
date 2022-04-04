const taskList = document.querySelector('.task__list')
let checkboxes = document.querySelectorAll('.checkbox')
let deleteBtn = document.querySelectorAll('.task__delete')


//hold shift to check multiple tasks
let lastChecked
function handleCheck(e){
    let inBetween = false

    //check all if shift is checked
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween
            }

            if(inBetween){
                checkbox.checked = true
            }
        })
    }

    //uncheck 
    if(e.shiftKey && this.checked === false){
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween
            }

            if(inBetween){
                checkbox.checked = false
            }
        })
    }
    lastChecked = this
}

//call the multiple check function
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck)
})


//add a new todo to the list
function addTodo(){
    const task = document.createElement('li')
    task.classList.add('task__el')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')

    const text = document.createElement('p')
    text.setAttribute('contenteditable', 'true')
    text.classList.add('task__text')

    const taskDelete = document.createElement('span')
    taskDelete.classList.add('task__delete')

    taskList.append(task)
    task.append(checkbox)
    task.append(text)
    task.append(taskDelete)

    text.focus()
    checkboxes = document.querySelectorAll('.checkbox')
    deleteBtn = document.querySelectorAll('.task__delete')


    //update the remove node each time a element list is created
    deleteBtn.forEach(bin => {
        bin.addEventListener('click', removeTodo)
    })
}

const addBtn = document.querySelector('#task__add-btn')
addBtn.addEventListener('click', addTodo)


//remove an element
function removeTodo(e){
    const element = this.parentNode
    element.classList.add('deleting')
    element.addEventListener('animationend', () => {
        element.remove()
    })
}