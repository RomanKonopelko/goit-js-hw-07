const inputRef = document.getElementById('name-input')
const outputRef = document.getElementById('name-output')

inputRef.addEventListener('input', event => { 
    event.target.value.length === 0 ?
        outputRef.textContent = 'незнакомец' :
        outputRef.textContent = event.target.value;
    
})