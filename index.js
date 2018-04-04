var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item {
   itemName: "name of the item",
   itemPrice: Math.floor(Math.random()*100)
 }
 console.log(`${itemName} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  if (false) {
    return "Your shopping cart is empty"
  } else {
    return `In your cart, you have ${itemName} at ${itemPrice}, pancake batter at $5, and eggs at $49.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
