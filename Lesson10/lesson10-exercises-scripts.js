//10c
let btn = document.querySelector('.js-button');
console.log(btn.classList.contains('js-button'));

//on click toggle button - .classList.add('.is-toggled')
//check if toggle - .classList.contains('.is-toggled')
//if toggle, turn off - .classList.remove('.is-toggled')

//single button
// let pressedBtn = document.querySelector('.toggling')
// function toggleCheck(){
//     if(!pressedBtn.classList.contains('is-toggled')){
//         pressedBtn.classList.add('is-toggled')
//     }else{
//         pressedBtn.classList.remove('is-toggled')
//     };
// };

//multiple buttons
function toggleCheck(selector){
    let pressedBtn = document.querySelector(selector);
    if(!pressedBtn.classList.contains('is-toggled')){
        turnOffBtn();
        pressedBtn.classList.add('is-toggled');
    }else{
        pressedBtn.classList.remove('is-toggled');
    };
};

function turnOffBtn(){
    let previousBtn = document.querySelector('.is-toggled');
    if(previousBtn){
        previousBtn.classList.remove('is-toggled');
    };
}

//Amazon Shipping Cost
function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
};

function calculateTotal() {
    const inputElement = document.querySelector('.js-input');
    let cost = Number(inputElement.value) * 100; //anytime we get a value from the DOM, it will be a string. We must convert to a number with Number()

    if (cost < 4000 && cost > 0) {
        cost = cost += 1000;
        document.querySelector('.js-totalCalculation').innerText = `Total Cost: $${cost / 100}`;
    } else{
        let errorDisplay = document.querySelector('.js-totalCalculation')
        errorDisplay.classList.add('error')
        errorDisplay.innerText = `Error: cost cannot be less than $0`;
    }
};