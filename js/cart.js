document.addEventListener('DOMContentLoaded', addToCart);

function addToCart () {
  const cart = retrieveFromLocal();
  cart.forEach((obj) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
    <img src="/images/product images/product-1.jpg" alt="">
    <span>Item 1</span>
    <span>R599</span>
    <div>
      <input type="number" name="" value="1" id="">
      <button>Remove</button>
    </div>
    <span>R599</span>
    </div>
    `
    const cart = document.querySelector('#cart-items');
    cart.appendChild(cartItem);
  })
  console.log(cart);
  
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