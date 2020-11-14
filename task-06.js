const validInputRef = document.getElementById('validation-input')
console.dir(validInputRef)

validInputRef.addEventListener('change', event => { 

    if (event.target.value.length === +validInputRef.dataset.length) {

        validInputRef.classList.add('valid')
        validInputRef.classList.remove('invalid')

    } else if (event.target.value.length === 0) {

        validInputRef.classList.remove('valid')
        validInputRef.classList.remove('invalid')
        
    } else { 

        validInputRef.classList.remove('valid')
        validInputRef.classList.add('invalid')
    }
})

