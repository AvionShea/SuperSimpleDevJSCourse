//8a.
const basketball = {
    name: 'basketball',
    price: 2095
};
console.log(basketball);

//8b
basketball.price += 500;
console.log(basketball);

//8c
basketball['delivery-time'] = '3 days';

//8d
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

console.log(comparePrice(productOne, productTwo));

//8e
