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
        pressedBtn.classList.add('is-toggled')
    }else{
        pressedBtn.classList.remove('is-toggled')
    };
};