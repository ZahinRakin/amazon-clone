export let cart = JSON.parse(localStorage.getItem('cart'));

export function addToCart(productId) {
  let increment = false;
  cart.forEach((item) => {
    if (item.productId === productId && !increment) {
      item.quantity++;
      increment = true;
    }
  });

  if (!increment) {
    cart.push({
      productId,
      quantity: 1
    });
  }
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId){
  cart = cart.filter(cartItem => cartItem.productId !== productId);
  saveToStorage();
}