const questionFormat = document.getElementById("question");
const inputNumber = document.getElementById("input");
const form = document.getElementById("form");
const scoreBoard = document.getElementById("score");

const number1 = Math.ceil(Math.random() * 12);
const number2 = Math.ceil(Math.random() * 12);
const rightAnswer = number1 * number2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
scoreBoard.innerHTML =
`<i class="fa-solid fa-star"></i> Score: ${score}`;


questionFormat.innerHTML = 
`What is ${number1} <i class="fa-solid fa-xmark"></i> ${number2}?`


form.addEventListener("submit", () => {
  const userAnswer = +inputNumber.value;
if (userAnswer === rightAnswer) {
  score ++;
  //console.log(score);
  updateStorage()
  alert("Correct!🎉🎊✨🤩");

} else {
  score--;
  //console.log(score);
  updateStorage()
  alert("Try Again!");
}
})

function updateStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}