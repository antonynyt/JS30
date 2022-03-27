const inputs = document.querySelectorAll('input')

function update(){
    const suffix = this.dataset.unit || ''
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix)
    console.log(this.value + suffix)
}

inputs.forEach( input => {
    input.addEventListener("change", update)
})