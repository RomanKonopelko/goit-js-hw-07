const listRef = document.getElementById('categories')
const listItemRef = document.getElementsByClassName('item')
const listTitleRef = document.querySelector('h2')
const arrayItems = Array.from(listItemRef)

console.log(`В списке ${listRef.childElementCount} категории`);

arrayItems.forEach(li => { 
    console.log(`Категория: ${li.firstElementChild.textContent}`)
    console.log(`Количество елементов: ${li.lastElementChild.childElementCount}`);
})