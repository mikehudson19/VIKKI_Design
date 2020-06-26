class Item {
  constructor(image, name, price, quantity) {
    this.image = image,
    this.name = name,
    this.price = price,
    this.quantity = quantity
  }
}

const cartAddBtn = document.getElementById('cartAdd');

cartAddBtn.addEventListener('click', (e) => {
  const image = document.querySelector('.prod-images').firstElementChild.getAttribute('src');
  const name = document.querySelector('#name').innerText;
  const price = document.querySelector('#price').innerText.slice(1);
  const quantity = document.querySelector('#qty').value;
  
  
  const item = new Item(image, name, price, quantity);
  console.log(item);
  persistToLocal(item);
  createDialogue('Item added to cart!')
  e.preventDefault();

})



function persistToLocal (item) {
  const cart = retrieveFromLocal();
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart))
}

function retrieveFromLocal () {
  let cart;
  if (localStorage.getItem('cart') === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  return cart;
}


function createDialogue(message, result) {
  const alert = document.createElement('div')
  alert.innerHTML = `<p>${message}</p>
  <div>
  <button><a href="/cart.html">Go to cart</a></button><button>Continue Shopping</button>
  </div> `
  alert.className = `dialogue`
  document.body.appendChild(alert);
  alert.addEventListener('click', (e) => {
    if (e.target.innerText == 'Continue Shopping') {
      alert.remove();
    }
  })

}
