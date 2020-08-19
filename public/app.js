const hamburger = document.querySelector(".navbar__hamburger");
const container = document.querySelector(".modal");

hamburger.addEventListener('click', () => {
  createModal();

  const close = document.querySelector('.modal__close');
  close.addEventListener('click', () => {
      const modal = document.querySelector('.modal__container');

  modal.remove();
})
})


function createModal() {
  const modal = document.createElement("div");
  modal.className = "modal__container";
  modal.innerHTML = `
    <div class="modal__menu">
      <span class="modal__close">+</span>
      <ul class="modal__list">
        <li class="modal__item"><a class="modal__link" href="">Home</a></li>
        <li class="modal__item"><a class="modal__link" href="">About</a></li>
        <li class="modal__item"><a class="modal__link" href="">Products</a></li>
        <li class="modal__item"><a class="modal__link" href="">Sizing</a></li>
        <li class="modal__item"><a class="modal__link" href="">Contact</a></li>
        <li class="modal__item"><a class="modal__link" href="">Cart</a></li>
      </ul>
    </div>
  `;
  container.appendChild(modal);
}
