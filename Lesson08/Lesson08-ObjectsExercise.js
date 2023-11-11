//8a.
const basketball = {
    name: 'basketball',
    price: 2095
};
console.log(basketball);

//8b.
basketball.price += 500;
console.log(basketball);

//8c.
basketball['delivery-time'] = '3 days';

//8d.
function comparePrice(productOne, productTwo){
    if(productOne.price < productTwo.price){
        return productOne;
    }else {
        return productTwo;
    }
};

productOne = {
    name: 'computer monitor',
    price: 3000
};
productTwo = {
    name: 'CPU',
    price: 8000
};

productThree = {
    name: 'computer monitor',
    price: 3000
};

console.log(comparePrice(productOne, productTwo));

//8e.
function isSameProduct(productOne, productTwo){
    if(productOne.name === productTwo && productOne.price === productTwo.price){
        return true;
    }
    else{
        return false;
    }
};

//solution that uses less code
function isSameProduct2(productOne, productThree){
    return(
        productOne.name === productThree.name &&
        productOne.price === productThree.price
    );
};

console.log(isSameProduct(productOne, productTwo));
console.log(isSameProduct2(productOne, productThree));

//8f.
console.log('Good Morning!'.toLowerCase());

//8g.
console.log('testing'.repeat(10));

//8h.
let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value){
  calculation += value;
  console.log(calculation);
  saveCalculations();
}

function saveCalculations(){
    localStorage.setItem('calculation', calculation);
};