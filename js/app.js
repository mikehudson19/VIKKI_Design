class Item {
  constructor(image, name, price, quantity) {
    (this.image = image),
    (this.name = name),
    (this.price = price),
    (this.quantity = quantity);
  }
}

const cartAddBtn = document.getElementById("cartAdd");

// Create an item object when 'Add to Cart' is clicked and persist to local
cartAddBtn.addEventListener("click", (e) => {
  const image = document
    .querySelector(".prod-images")
    .firstElementChild.getAttribute("src");
  const name = document.querySelector("#name").innerText;
  const price = document.querySelector("#price").innerText.slice(1);
  const quantity = document.querySelector("#qty").value;

  const item = new Item(image, name, price, quantity);

  persistToLocal(item);

  e.preventDefault();
  cartNavQty();
});

function persistToLocal(item) {
  const cart = retrieveFromLocal();
  const cartArray = cart.filter((obj) => {
    if (obj.name == item.name) {
      return obj.name;
    }
  });
  if (cartArray.length) {
    createAlert("You have already added this item to your cart.", "failure");
  } else {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    createDialogue("Item added to cart!");
  }
}

function retrieveFromLocal() {
  let cart;
  if (localStorage.getItem("cart") === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  return cart;
}

// Modal pop-up for when item is added to the cart
function createDialogue(message) {
  const modal = document.createElement("div");
  modal.className = "bg-modal";
  document.body.appendChild(modal);
  modal.innerHTML = `
  <div class='bg-content'>
  <p>${message}</p>
  <div>
  <a href="/cart.html" class="u_btn-light">Go to cart</a><a href="#" class="u_btn-light">Continue Shopping</a>
  </div>
  </div> `;
  modal.addEventListener("click", (e) => {
    if (e.target.innerText == "Continue Shopping") {
      modal.remove();
    }
  });
}

// Alert pop-up for when item has already been added to the cart
function createAlert(message, result) {
  const alert = document.createElement("div");
  alert.innerHTML = `<p>${message}</p>`;
  alert.className = `alert ${result}`;
  document.body.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 2000);
}

// Add the cart quantity to the cart icon in the Navbar
function cartNavQty() {
  const cartQty = document.querySelector(".cart-qty");
  const cartItems = retrieveFromLocal();
  if (cartItems.length === 0) {
    cartQty.innerText = " ";
  } else {
    cartQty.innerText = cartItems.length;
  }
}

// Add no. of items in cart to the cart icon in the Navbar
document.addEventListener("DOMContentLoaded", cartNavQty);
