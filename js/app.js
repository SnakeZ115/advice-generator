
const advice_id = document.querySelector('#advice_id');
const advice = document.querySelector('.advice');
const button = document.querySelector('.button');

document.addEventListener('DOMContentLoaded', getAdvice);

button.addEventListener('click', getAdvice);

async function getAdvice() {

    const url =  `https://api.adviceslip.com/advice?timestamp=${Date.now()}'` 
    let result = await fetch(url);
    let data = await result.json();

    let id = data.slip.id;
    let adviceText = data.slip.advice;
    
    advice_id.textContent = id;
    advice.textContent = `"${adviceText}"`;
}

