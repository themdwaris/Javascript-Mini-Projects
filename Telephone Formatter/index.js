const input = document.querySelector("input");

let prevVal = "";
let threeVal = "";
input.addEventListener("input", (e) => {
  const val = e.target.value;

  if(/\d+$/g.test(val)){
    input.value=val
  }else{
    input.value=val.slice(0,val.length-1)
  }


  if (val.length === 4 && prevVal.length < val.length) {
    threeVal=val.slice(0, 3)
    input.value = `+(${val.slice(0, 3)}) - ${val.slice(3, val.length)}`;
  } else if (val.length === 9 && prevVal.length > val.length) {
    input.value=threeVal
  }
  prevVal = val;
});


