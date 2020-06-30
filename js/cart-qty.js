function retrieveFromLocal () {
  let cart;
  if (localStorage.getItem('cart') === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  return cart;
}

function cartNavQty () {
  const cartQty = document.querySelector('.cart-qty');
  const cartItems = retrieveFromLocal();
  if (cartItems.length === 0) { 
    cartQty.innerText = ' ';
  } else { 
    cartQty.innerText = cartItems.length;
  }
}

document.addEventListener('DOMContentLoaded', cartNavQty)