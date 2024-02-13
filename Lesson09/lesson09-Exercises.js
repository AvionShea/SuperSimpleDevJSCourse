console.log(document.querySelector('button'));

//9b
document.querySelector('.js-9b').innerText = '9b done!';

//9d
document.querySelector('#submitName').addEventListener('click', displayName);


function displayName() {
    let userName = document.querySelector('#userName').value

    document.querySelector('#nameResults').innerHTML = `Your name is: ${userName}!`
}

function enterKeyUsed(event) {
    if (event.key === 'Enter') {
        displayName();
    }
};