const listRef = document.getElementById('ingredients')
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

function createList(array) {
 return array.map(item => {
    const list = document.createElement('li');
    list.textContent = item;
   return list
  });
}

const products = createList(ingredients)

listRef.append(...products)