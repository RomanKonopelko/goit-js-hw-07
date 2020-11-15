const inputRef = document.getElementById('name-input')
const outputRef = document.getElementById('name-output')

inputRef.addEventListener('input', event => { 
      outputRef.textContent = event.target.value.length === 0 ?
     'незнакомец' :
      event.target.value;
    
})