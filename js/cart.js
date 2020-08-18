document.addEventListener('DOMContentLoaded', addToCart);

function addToCart () {
  const cart = retrieveFromLocal();
  cart.forEach((obj) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
    
      <img src="${obj.image}" alt=""> 
      <span class="name">${obj.name}</span>
 
    <span class="price">R${obj.price}</span>
    <input type="number" value="${obj.quantity}" id="qty">
    <span class="total">R${obj.price}</span>
    <span ><i class="fas fa-trash-alt remove"></i></span>
    `
    const cart = document.querySelector('#cart-items');
    cart.appendChild(cartItem);
  })
  calculateTotal();
  cartNavQty();
  
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

function removeItem (e) {
  if (e.target.className.includes('remove')) {
    const cart = retrieveFromLocal();
    const item = e.target.parentElement.parentElement;
    cart.forEach((obj, index) => {
      if (obj.name === item.querySelector('.name').innerText) {        
        cart.splice(index, 1);
      }
    })
    item.remove(); 
    localStorage.setItem('cart', JSON.stringify(cart))
    calculateTotal();
    createAlert('Item removed from cart', 'failure');
  }
}

document.addEventListener('click', (e) => {
  removeItem(e);
})

function calculateTotal () {
  const cartItems = document.querySelectorAll('.cart-item');
  
  let total = 0;
  cartItems.forEach((obj) => {

    const price = obj.querySelector('.price').innerText.slice(1);
    const qty = obj.querySelector('#qty').value;
    let itemTotal = obj.querySelector('.total');
    const totalItemTotal = numberWithCommas(price*qty)
  
    itemTotal.innerText = `R ${totalItemTotal}`;    
  
  total += price*qty;
})
const newTotal = numberWithCommas(total)
const cartTotal = document.querySelector('.total-price');
cartTotal.innerText = `Cart Total: R ${newTotal}`;
cartNavQty();
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

document.addEventListener('DOMContentLoaded', () => {
  const qtyElements = document.querySelectorAll('.cart-item');
  qtyElements.forEach((obj) => {
    obj.querySelector('input').addEventListener('change', () => {
      if (obj.querySelector('input').value == 0) {
        createAlert('You cannot selecto zero items, asshole.', 'failure')
        obj.querySelector('input').value = 1;
        
      } else {
        calculateTotal();
        const cart = retrieveFromLocal();
        cart.forEach((item) => {
          if (item.name == obj.querySelector('.name').innerText) {
            item.quantity = obj.querySelector('input').value;
          }
          localStorage.setItem('cart', JSON.stringify(cart));
        })
      }
    })
  })
});

function createAlert(message, result) {
  const alert = document.createElement('div')
  alert.innerHTML = `<p>${message}</p>`
  alert.className = `alert ${result}`
  document.body.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 2000)
}

function cartNavQty () {
  const cartQty = document.querySelector('.cart-qty');
  const cartItems = document.querySelectorAll('.cart-item');
  if (cartItems.length === 0) { 
    cartQty.innerText = ' ';
  } else {
    
    cartQty.innerText = cartItems.length;
  }
  
}
