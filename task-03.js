const galleryRef = document.getElementById('gallery')

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
},
];

const markup = images.reduce((acc,picture) => 
      acc +`<li class='gallery-item'><img class='pic' src="${picture.url}" alt="${picture.alt}"</li>`,[]
)
galleryRef.insertAdjacentHTML("afterbegin", markup)

console.log(galleryRef);


// images.forEach(picture => { 
//     const li = document.createElement('li')
//     const image = document.createElement('img')
//     image.src = picture.url
//     image.alt = picture.alt
//     li.append(image)
//     galleryRef.append(li)
//     image.classList.add('pic')
//     li.classList.add('gallery-item')
// })

// console.log(galleryRef);

