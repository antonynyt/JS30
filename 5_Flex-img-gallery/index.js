const galleryItems = document.querySelectorAll('.gallery__panel')

function panelToggle(){
    this.classList.toggle('open')
}

galleryItems.forEach(item => {item.addEventListener("click", panelToggle)})

