const rangeRef = document.getElementById('font-size-control')
const txtRef = document.getElementById('text')

rangeRef.addEventListener('input', event => { 
    txtRef.style.fontSize = event.target.value + 'px'
    // txtRef.style.color = `rgb(0,${event.target.value},0)`
})