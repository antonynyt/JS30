const inputs = document.querySelectorAll('input')

function update(){
    const suffix = this.dataset.unit || ''
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix)
    console.log(this.value + suffix)
}

inputs.forEach( input => {
    input.addEventListener("change", update)
})


const dragElem = document.querySelector('#header')
const moveElem = document.querySelector('.border__control')

dragElem.addEventListener("mousedown", dragable )

function dragable(eventObj){
    eventObj.preventDefault()

    let clickMouseX = eventObj.clientX
    let clickMouseY = eventObj.clientY

    document.onmousemove = (e) => {
        e.preventDefault()

        let mouseX = e.clientX - clickMouseX
        clickMouseX = e.clientX

        let mouseY = e.clientY - clickMouseY
        clickMouseY = e.clientY

        moveElem.style.left = (moveElem.offsetLeft) + mouseX + 'px'
        moveElem.style.top = (moveElem.offsetTop) + mouseY + 'px'

    }

    document.onmouseup = () => {
        document.onmouseup = null
        document.onmousemove = null
    }
}


