class Item {
  constructor(image, name, price) {
    this.image = image,
    this.name = name,
    this.price = price
  }
}

const cartAddBtn = document.getElementById('cartAdd');
cartAddBtn.addEventListener('click', (e) => {
  const image = document.querySelector('.prod-images').firstElementChild.getAttribute('src');
  const name = document.querySelector('#name').innerText;
  const price = document.querySelector('#price').innerText.slice(1);
  
  const item = new Item(image, name, price);
  console.log(item);
  e.preventDefault();
})



