const questionFormat = document.getElementById("question");
const inputNumber = document.getElementById("input");
const form = document.getElementById("form");


const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

const rightAnswer = number1 * number2;

questionFormat.innerHTML = 
`What is ${number1} <i class="fa-solid fa-xmark"></i> ${number2}?`

