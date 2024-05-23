// Замена изображения при наведении в карточке товара

function changeImage(img, newSrc) {
    img.dataset.originalSrc = img.src; 
    img.src = newSrc; 
}

// Функция для восстановления исходного изображения при убирании курсора
function resetImage(img) {
    img.src = img.dataset.originalSrc; 
}

// Замена изображения в карточке товара

function changeImageGallery(newSource) {
    var imageContainer = document.querySelector('.container_of_image img');
    imageContainer.src = newSource;
}

// Корзина товаров

const products = document.querySelectorAll('.product');
const totalPriceSpan = document.getElementById('totalPrice');
const promoCodeInput = document.getElementById('promoCode');
const applyPromoButton = document.getElementById('applyPromo');
const discountSpan = document.getElementById('discount');
const discountedPriceSpan = document.getElementById('discountedPrice');

products.forEach(product => {
  const quantityInput = product.querySelector('input[type="number"]');
  const decreaseButton = product.querySelector('.decrease');
  const increaseButton = product.querySelector('.increase');

  decreaseButton.addEventListener('click', () => {
    if (quantityInput.value > 0) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
      updateTotalPrice();
    }
  });

  increaseButton.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
  });

  quantityInput.addEventListener('input', updateTotalPrice);
});

applyPromoButton.addEventListener('click', applyPromoCode);

function updateTotalPrice() {
  let totalPrice = 0;
  products.forEach(product => {
    const price = parseInt(product.querySelector('.price').textContent.slice(5, -1)); 
    const quantity = parseInt(product.querySelector('input[type="number"]').value);
    totalPrice += price * quantity;
  });
  totalPriceSpan.textContent = `${totalPrice} ₽`;
}

function applyPromoCode() {
  const promoCode = promoCodeInput.value;
  if (promoCode === 'VIAS21') {
    const discount = 20;
    const totalPrice = parseInt(totalPriceSpan.textContent.slice(0, -1)); 
    const discountedPrice = totalPrice * (100 - discount) / 100;
    discountSpan.textContent = `${discount}%`;
    discountedPriceSpan.textContent = `${discountedPrice.toFixed(2)} ₽`;
  } else {
    alert('Промокод недействителен');
  }
}



