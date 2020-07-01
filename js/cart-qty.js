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

const hamburger = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.navbar');
const hamNav = document.querySelector('.ham-nav-contain')

document.addEventListener('click', (e) => {
  if (e.target.className.includes('fas')) {
    hamNav.style.display = 'flex';
    hamburger.style.display = 'none';
  } else if (e.target.className.includes('close')) {
    hamNav.style.display = 'none';
    hamburger.style.display = 'flex';
  }
})