const autoText = document.querySelector(".autoText");

const wordsArray = ["Developer", "Coder", "Programmer"];
const word = "Developer";

let charIndex = 0;
let wordIndex = 0;
let clearText = false;
let skipUpdate=0

const intervalId = setInterval(() => {
    
    if(skipUpdate){
        skipUpdate--
        return
    }
  if (!clearText) {
    skipUpdate=2
    autoText.innerText += wordsArray[wordIndex][charIndex];
    charIndex++;
    
  } else {
    autoText.innerText = autoText.innerText.slice(
      0,
      autoText.innerText.length - 1
    );
    charIndex--
  }
  if (charIndex === wordsArray[wordIndex].length) {
    skipUpdate=6
    clearText = true;
  }
  if (autoText.innerText.length === 0 && clearText) {
    clearText = false;
    charIndex = 0;
    wordIndex++
  }
 
  if(wordIndex===wordsArray.length){
     wordIndex=0
  }
}, 100);
