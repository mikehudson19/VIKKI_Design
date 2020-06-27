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
  const modal = document.createElement('div');
  modal.className = 'bg-modal';
  document.body.appendChild(modal)
  modal.innerHTML = `
  <div class='bg-content'>
  <p>${message}</p>
  <div>
  <a href="/cart.html" class="u_btn-light">Go to cart</a><a href="#" class="u_btn-light">Continue Shopping</a>
  </div>
  </div> `
  modal.addEventListener('click', (e) => {
    if (e.target.innerText == 'Continue Shopping') {
      modal.remove();
    }
  })
 

}
