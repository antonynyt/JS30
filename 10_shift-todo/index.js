//TODO

// - Add LocalStorage
// - Better HTML structure for text input (return is accepted)
// - Add Animation on the bin SVG
// - Add draggable to change the list order


let checkboxes = document.querySelectorAll('.checkbox')
let deleteBtn = document.querySelectorAll('.task__delete-btn')
let taskEl = document.querySelectorAll('.task__el')
let taskInput = document.querySelectorAll('.task__text')

// //Set Some default values
// let defaultValues = [
//     {
//         "taskContent": "Add draggable list element",
//         "checked" : false
//     },
//     {
//         "taskContent": "Better HTML structure for input",
//         "checked" : true
//     },
//     {
//         "taskContent": "Add animation SVG delete",
//         "checked" : true
//     },
//     {
//         "taskContent": "Add Local Storage",
//         "checked" : false
//     }

// ]

// if (!localStorage.getItem('todo')){
//     localStorage.setItem('todo', JSON.stringify(defaultValues));
// }

// //end fake values


//hold shift to check multiple tasks
let lastChecked
function handleCheck(e){
    this.style.animationPlayState = 'running'

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

//set todo already in LocalStorage
if (localStorage.getItem('todo')){
    const todoList = JSON.parse(localStorage.getItem('todo'))
    todoList.forEach(todo => {
        addTodo(todo)
    })
}


//add a new todo to the list
function addTodo(value){

    const taskList = document.querySelector('.task__list')
    const task = document.createElement('li')
    task.classList.add('task__el')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.classList.add('checkbox')

    const text = document.createElement('input')
    text.setAttribute('type', 'text')
    text.setAttribute('placeholder', 'Untitled')
    text.classList.add('task__text')

    if (value && typeof(value) === 'object'){
        const todo = value
        const taskContent = todo.taskContent
        const checked = todo.checked
        text.setAttribute('value', taskContent)
        checkbox.checked = checked
    }

    const taskDelete = document.createElement('span')
    taskDelete.classList.add('task__delete-btn')

    taskList.append(task)
    task.append(checkbox)
    task.append(text)
    task.append(taskDelete)

    if(!value){text.focus()}

    //update queryselector nodes
    checkboxes = document.querySelectorAll('.checkbox')
    deleteBtn = document.querySelectorAll('.task__delete-btn')
    taskEl = document.querySelectorAll('.task__el')
    taskInput = document.querySelectorAll('.task__text')


    //update the remove node each time a element list is created
    deleteBtn.forEach(bin => {
        bin.addEventListener('click', removeTodo)
    })
}

const addBtn = document.querySelector('.task__add')
addBtn.addEventListener('click', () => {
    addTodo()

    
})

function updateTodo(){
    const todoList = JSON.parse(localStorage.getItem('todo'))
    
}

//addeventlistener on every todo
deleteBtn.forEach(bin => {
    bin.addEventListener('click', removeTodo)
})

//remove an element
function removeTodo(e){
    const element = this.parentNode
    element.classList.add('deleting')
    element.addEventListener('animationend', () => {
        element.remove()
    })
}