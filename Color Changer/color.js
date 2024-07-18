const container = document.querySelector(".main");
const colors = document.querySelectorAll(".color");

colors.forEach((singleColor) => {
  singleColor.addEventListener("click", (e) => {
    let color = singleColor.getAttribute("data");
    container.style.backgroundColor = `${color}`;
  });
});

let namee = ["my", "name", "is", "waris"];
const arr = [1, 2, 4, "hello", "bye", true, ["laptop", "samsung"]];
// namee[0,3,8,11] = ['M','N','I','W']
// let result = namee.split(" ") //string to aray , array to string
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
// console.log(array3);
let [a, b, c] = arr;
console.log(a, b, c);

// console.log(arr)

// var x=20

// function fun(){
//   console.log(x);
//   var x=30
// }
// fun()

// console.log("i am peter 1", peter);
// var peter;
// console.log("i am peter 2", peter);
// peter = "Petre Parker"
// console.log("i am peter", peter);

// fn()
// function fn(){
//   console.log("i am fn");
// }
// fn();

// // counterrr()
// var counterrr = ()=>{
//   console.log("i am counter",x);
//   var x=20
// }
// counterrr();

// console.log("line no 51", peter); // undefined 1
// var peter=10;
// function fn(){
//   console.log("line no 54 ", peter);  //10 4
// }
// console.log("line no 56 ", peter); //10 2
// function one() {
//   console.log("line no 58 ", peter); //undefined 3
//   var peter=20
//   fn()
//   console.log("line no 54 ", peter); // 20 5
// }
// one()

// var acer = 10;

// console.log("line no 66", acer); //10

// function fn() {
//   console.log("line no 68", acer); //undefined
//   var acer = 20;
//   acer++;
//   console.log("line no 71", acer); //21
//   if (acer) {
//     var acer = 40;
//     acer++;
//     console.log("line no 78", acer); //31
//   }
//   console.log("line no 80", acer); //21
// }
// fn();
// console.log("line no 82", acer); //10

// let letF = "orange"
// var varF = "orange"
// console.log(letF,varF); //orange , orange
// {
//   let letF= "apple"
//   var varF = "apple"
//   console.log(letF,varF) // apple,apple
// }
// console.log(letF,varF) // orange,apple

// //reduce
// const myArr = [1,2,3,4,5,100]
// const sumOfArr = myArr.reduce((acc,x)=>{
//   return acc+x
// },0)
// console.log(sumOfArr)

// const obj = {
//   name:"waris",
//   age:22,
//   gender:"male",
//   city:"Maghar"

// }

// // console.log(Object.values(obj));
// let  val
// val = 0??10
// console.log(val);

// const elements = [11,22,4,88]
// let sum =0
// for (let index = 0; index < elements.length; index++) {
//    sum += elements[index];
// }
// console.log(sum);

// let max=0

// for (let index = 0; index < elements.length; index++){
//   if(max<elements[index]){
//     max=elements[index]
//   }
// }
// console.log(max)

// let min=Infinity

// for (let index = 0; index < elements.length; index++){
//   if(min>elements[index]){
//     min=elements[index]
//   }
// }
// console.log(min)

// const element = document.createElement("div");
// const h1= document.createElement('h1')
// element.className="customDiv"
// element.id="customDiv"
// element.setAttribute("class", "customDiv head");
// element.setAttribute("id", "customDiv");
// const textNode = document.createTextNode(" Hello DOM");
// element.appendChild(h1)
// h1.innerText="javascript"
// element.appendChild(textNode);
// element.firstElementChild.style.display = "none";
// console.log(element.innerHTML)
// console.log(element.innerText)
// console.log(element.textContent)
// document.querySelector('.main').appendChild(element)
// console.log(element.firstElementChild.innerText)

const createElement = (type, classname,id, value,childEleme) => {
  const element = document.createElement(type);
  // const h1= document.createElement('h1')
  // element.className="customDiv"
  // element.id="customDiv"
  element.setAttribute("class", classname);
  element.setAttribute("id", id);
  const textNode = document.createTextNode(value);
  // element.appendChild(h1)
  // h1.innerText="javascript"
  element.appendChild(textNode);
  const childElem = document.createElement(childEleme);
  element.appendChild(childElem)
  // element.firstElementChild.style.display = "none";
  console.log(element.innerHTML)
  return element
};

const cretatedElemet=createElement("div","heading","head","Hello i am h1","h1")

console.log(cretatedElemet.children);