const counterVal = document.querySelector(".counterValue");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const inputVal = document.querySelector(".inputF");
const resetBtn = document.querySelector(".reset");



// Method 1
increment.addEventListener("click", () => {

  const val = parseInt(counterVal.innerText);
  const incrementBy = parseInt(inputVal.value);
  counterVal.innerText = val + incrementBy;
});
decrement.addEventListener("click", () => {

  const val = parseInt(counterVal.innerText);
  const incrementBy = parseInt(inputVal.value);

  if (parseInt(counterVal.innerText) <= 0) {
    counterVal.innerText = 0;
  } else {
    counterVal.innerText = val - incrementBy;
  }
});
resetBtn.addEventListener('click',()=>{
    counterVal.innerText=0
    inputVal.value=1
})

// Method 2
// let countBy=0
// let counter=0
// inputVal.addEventListener('input',(e)=>{

//     countBy = parseInt(e.target.value)
//     console.log(typeof countBy)
// })

// increment.addEventListener('click',(e)=>{

//     if(countBy){
//         counter=counter+countBy
//     }else{
//         counter++
//     }

//     counterVal.innerHTML=counter
// })
// decrement.addEventListener('click',(e)=>{
//     if(counter<=0){
//         counter=0
//     }else{
//         if (countBy) {
//             counter=counter-countBy
//         }else{
//             counter--
//         }
//     }
//     counterVal.innerText=counter
// })

// resetBtn.addEventListener('click',()=>{
//     counterVal.innerText=0
//     counter=0
//     countBy=0
// })
