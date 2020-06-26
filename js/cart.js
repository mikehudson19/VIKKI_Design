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
    <div>
      <input type="number" value="${obj.quantity}" id="qty">
      <button class="remove">Remove</button>
    </div>
    <span class="total">R${obj.price}</span>
    </div>
    `
    const cart = document.querySelector('#cart-items');
    cart.appendChild(cartItem);
  })
  calculateTotal();
  
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
  if (e.target.className == 'remove') {
    const cart = retrieveFromLocal();
    const item = e.target.parentElement.parentElement;
    cart.forEach((obj, index) => {
      if (obj.name === item.querySelector('.name').innerText) {        
        cart.splice(index, 1)
      }
    })
    item.remove(); 
    localStorage.setItem('cart', JSON.stringify(cart))
    calculateTotal();
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

  
  itemTotal.innerText = `R ${price* qty}`;    
  
  total += price*qty;
})

const cartTotal = document.querySelector('.total-price');
cartTotal.innerText = `R ${total}`;
}


document.addEventListener('DOMContentLoaded', () => {
  const qtyElements = document.querySelectorAll('.cart-item');
  qtyElements.forEach((obj) => {
    obj.querySelector('input').addEventListener('change', () => {
      if (obj.querySelector('input').value == 0) {
        alert('You cannot select zero items');
        obj.querySelector('input').value = 1;
      } else {
        calculateTotal();
      }
    })
  })
});


