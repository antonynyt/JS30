const checkboxes = document.querySelectorAll('.checkbox')

console.log(checkboxes)

let lastChecked

function shiftCheck(e){
    let inBetween = false

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
    checkbox.addEventListener('click', shiftCheck)
})


