document.addEventListener('DOMContentLoaded', addToCart);

function addToCart () {
  const cart = retrieveFromLocal();
  cart.forEach((obj) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
    <img src="${obj.image}" alt="">
    <span class="name">${obj.name}</span>
    <span>R${obj.price}</span>
    <div>
      <input type="number" name="" value="1" id="">
      <button class="remove">Remove</button>
    </div>
    <span>R${obj.price}</span>
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

function removeItem () {

}

document.addEventListener('click', (e) => {
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
  }
})