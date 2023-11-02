//7g.
let calculation = '';

function updateCalculation(value){
  calculation += value;
  console.log(calculation);
}

//7h.
let cartQuantity = 0;

function updateCartQuantity(changeValue){

  if(cartQuantity + changeValue > 10){
    alert('The cart is full.')
  }
  else if(cartQuantity + changeValue < 0){
    alert('Not enough items in the cart.')
  }
  else{
    cartQuantity += changeValue;
    console.log(`Cart quantity: ${cartQuantity}`);
  }
}