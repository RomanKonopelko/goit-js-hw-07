const quantity = document.querySelector('[type="number"]')
const btnCreate = document.querySelector('[data-action="render"]')
const btnDelete = document.querySelector('[data-action="destroy"]')
const boxes = document.getElementById('boxes')

function create(amount) { 
    let num = 0;
    let px = 10;
    let boxArr = []
    for (let i = 1; i <= amount; i += 1) {
        num += 1
        px += 10;
        let div = document.createElement('div')
        div.textContent = num
        div.style.width = px + 'px'
        div.style.height = px + 'px'
        div.style.backgroundColor = `rgb( ${Math.random() * 256} ,  ${Math.random() * 256} ,  ${Math.random() * 256})`
        boxArr.push(div)
        boxes.append(...boxArr)
     }
}
function render() {
    boxes.innerHTML = '';
    create(quantity.value)
}
btnCreate.addEventListener('click', render)
btnDelete.addEventListener('click', () => { 
    boxes.innerHTML = "";
})