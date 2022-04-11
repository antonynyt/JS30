const passKeyContainer = document.querySelector('.passkey')

const h1 = document.querySelector('h1')
const p = document.querySelector('p')

const pressed = []
const password = 'asdfd'


function handlePasskey(e){
    pressed.push(e.key)
    pressed.splice(-password.length -1 , pressed.length - password.length)

    if(pressed.join('').includes(password)){
        document.body.classList.add('granted')
        h1.innerHTML = 'Access Granted'
        p.innerHTML = 'Congratulation'
        removeEvent()
    }

    const key = document.createElement('kbd')
    key.innerHTML = e.key
    passKeyContainer.appendChild(key)

    key.addEventListener('animationend', e => key.remove())
}


window.addEventListener('keyup', handlePasskey)

function removeEvent(){
    window.removeEventListener('keyup', handlePasskey)
}