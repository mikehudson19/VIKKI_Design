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
  const hamCartQty = document.querySelector('.ham-cart-qty');
  const cartItems = retrieveFromLocal();
  if (cartItems.length === 0) { 
    cartQty.innerText = ' ';
  } else { 
    cartQty.innerText = cartItems.length;
    hamCartQty.innerText = cartItems.length;
  }
}

document.addEventListener('DOMContentLoaded', cartNavQty)

// HAMBURGER MENU FUNCTIONALITY 
const hamburger = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.navbar');

document.addEventListener('click', (e) => {
  if (e.target.className.includes('fa-bars')) {
    createMenu();
    cartNavQty();
  } else if (e.target.className.includes('close')) {
    const hamNav = document.querySelector('.ham-nav-container');
    hamNav.remove();
  }
})

function createMenu () {
  const div = document.createElement('div');
  div.className = 'ham-nav-container';
  div.innerHTML = `
  <nav class="ham-navbar nav-light">
            <span class="close">+</span>
            <ul>
              <li><a href="/index.html">Home</a></li> 
              <li><a href="/about.html">About</a></li>
              <li><a href="/products.html">Products</a></li>
              <li><a href="/sizing.html">Sizing</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/cart.html"><span class="ham-cart-qty"></span><i class="fas fa-shopping-cart"></i></a></li>
            </ul>
          </nav>
  `
const contentDiv = document.querySelector('showcase-content');
const parent = document.querySelector('.u_container');
parent.insertBefore(div, contentDiv);
}