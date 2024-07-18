
const inputVal = document.querySelector("input");
const submitBtn = document.querySelector(".submitBtn");
const startGame = document.querySelector(".startGame");
const result = document.querySelector(".result");
const lowHi = document.querySelector(".lowHi");
const totalTry = document.querySelector(".totalTry");
const remain = document.querySelector(".remain");


(function guessTheNumber(){

let randomValue = Math.round(Math.random() * 100 );
let remainingAttempts=1
let totalGuess=[]

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
//   console.log(randomValue);
  const guessedNumber = parseInt(inputVal.value);

  if (isNaN(guessedNumber)) {
    alert("Pleae enter a valid number");
  } else if (guessedNumber < 0) {
    alert("Pleae enter between 0 to 100");
  } else if (guessedNumber > 100) {
    alert("Pleae enter between 0 to 100");
  } else {
    remainingAttempts++
    // console.log(remainingAttempts);
    if(remainingAttempts>11){
        lowHi.innerText="Game Over... "
        remainingAttempts=1
        submitBtn.disabled=true
        startGame.disabled=false
        return;
    }
    else{
        // console.log(remainingAttempts);
        if (guessedNumber === randomValue) {
            lowHi.innerHTML = `<h2>Congrats 😎🥳</h2>`;
            submitBtn.disabled=true
            startGame.disabled=false
          } else if (guessedNumber < randomValue) {
            
            remain.innerText=`Remaining attempts: ${11-remainingAttempts}`
            lowHi.innerText = "Number is too low";
          } else if (guessedNumber > randomValue) {
            
            remain.innerText=`Remaining attempts: ${11-remainingAttempts}`
            lowHi.innerText = "Number is too high";
          }
          totalGuess.push(inputVal.value)
          totalTry.innerText=`Your guesses: `+ totalGuess.join(', ') ;
          inputVal.value=""
    }
    
  }

});

startGame.addEventListener('click',()=>{
    inputVal.value=""
    lowHi.innerText = "";
    totalGuess=[]
    remainingAttempts=1
    totalTry.innerText=""
    remain.innerText=""
    submitBtn.disabled=false
    startGame.disabled=true
    randomValue = Math.round(Math.random() * 100 );

})

})()