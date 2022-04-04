let checkboxes = document.querySelectorAll('.checkbox')
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

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck)
})


const taskList = document.querySelector('.task__list')

function addTodo(){
    const task = document.createElement('li')
    task.classList.add('task__el')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')

    const text = document.createElement('p')
    text.setAttribute('contenteditable', 'true')
    text.classList.add('task__text')

    taskList.append(task)
    task.append(checkbox)
    task.append(text)

    text.focus()
    checkboxes = document.querySelectorAll('.checkbox')
}

const addBtn = document.querySelector('#task__add-btn')
addBtn.addEventListener('click', addTodo)