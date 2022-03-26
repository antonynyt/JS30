const keys = document.querySelectorAll(".key")

window.addEventListener("keypress", (e) => {
    keys.forEach(key => {
        if (key.children[0].innerHTML.toLowerCase() == e.key){
            playSound(key)
        }
    })
})

keys.forEach( key => {
    key.addEventListener("click", () => {
        playSound(key)
    })
})

function playSound(key){
    let soundName = key.children[1].innerHTML.toLowerCase()
    let audio = new Audio(`../assets/sounds/${soundName}.wav`)
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    key.addEventListener("transitionend", () => { key.classList.remove('playing') })
}
