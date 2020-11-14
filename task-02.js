const listRef = document.getElementById('ingredients')
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
ingredients.forEach(elem => {
    const li = document.createElement('li')
    li.textContent = elem
    listRef.append(li)
})

console.log(listRef);