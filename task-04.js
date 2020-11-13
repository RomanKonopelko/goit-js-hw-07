const counterRef = document.getElementById('counter')
const btnDecr = document.querySelector('[data-action="decrement"]')
// console.log(btnDecr);
const btnIncr = document.querySelector('[data-action="increment"]')
// console.log(btnIncr);
const valueRef = document.getElementById('value')

let counterValue = 0

btnDecr.addEventListener('click', () => { 
    decrement()
})

btnIncr.addEventListener('click', () => { 
    increment()
})

const increment = () => { 
       counterValue += 1
valueRef.textContent = counterValue
}

const decrement = () => { 
     counterValue -= 1
valueRef.textContent = counterValue
}