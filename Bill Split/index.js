const inputAmount = document.querySelector(".amountInput");
const selectBox = document.querySelector(".selectBox");
const numOfPeople = document.querySelector(".numOfPeople");
const generateBill = document.querySelector(".submit");
const tipAmount = document.querySelector(".tipAmount");
const total = document.querySelector(".total");
const eachPB = document.querySelector(".eachPB");
const reset = document.querySelector(".reset");
const customTip = document.querySelector(".customTipp");

let tipPercentage=0;

inputAmount.addEventListener('input',()=>{
    if(!inputAmount.value){
        customTip.disabled=true
        numOfPeople.disabled=true
        generateBill.disabled=true;
        ;[...selectBox.children].forEach(box => box.disabled=true );
    }else{
        customTip.disabled=false
        numOfPeople.disabled=false
        // generateBill.disabled=false;
        ;[...selectBox.children].forEach(box => box.disabled=false );
    }
})
generateBill.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = parseInt(inputAmount.value);
  const numberOfPeople = parseInt(numOfPeople.value);

  if(!inputValue){
    alert('Please enter the amount')
    return
  }else if(!numberOfPeople){
    alert('Please enter number of people')
    return
  }
  const tipAmountt = inputValue * (tipPercentage / 100).toFixed(2);
  const totalAmount = inputValue + tipAmountt;
  tipAmount.innerText = tipAmountt;
  total.innerText = totalAmount;
  eachPB.innerText = totalAmount / numberOfPeople;
  reset.disabled=false
});

reset.addEventListener("click", () => {
  tipAmount.innerText = 0;
  total.innerText = 0;
  eachPB.innerText = 0;
  inputAmount.value ='';
  numOfPeople.value ='';
  customTip.value ='';
  tipPercentage = 0;
  [...selectBox.children].forEach((ele) => ele.classList.remove("selected"));
  reset.disabled=true
  customTip.disabled=true
  numOfPeople.disabled=true
  generateBill.disabled=true
  ;[...selectBox.children].forEach(box => box.disabled=true );

});

customTip.addEventListener("input", () => {
  tipPercentage = parseInt(customTip.value);
  [...selectBox.children].forEach((ele) => ele.classList.remove("selected"));

  enableDisableButton()
 
});

selectBox.addEventListener("click", (e) => {
  if (e.target != selectBox) {
    [...selectBox.children].forEach((ele) => ele.classList.remove("selected"));
    e.target.classList.add("selected");
    customTip.value ='';
    tipPercentage = parseInt(e.target.innerText);
  }
  enableDisableButton()

});

numOfPeople.addEventListener('input',()=>{
    enableDisableButton()
})

function enableDisableButton(){
    if(tipPercentage&&numOfPeople.value){
        generateBill.disabled=false
      }else{
        generateBill.disabled=true
      }
}




