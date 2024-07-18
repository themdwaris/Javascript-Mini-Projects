const allCheckBox = document.querySelectorAll(".checkbox");
const inputs = document.querySelectorAll("input");
const errorMsg = document.querySelector(".warningMsg");
const subBar = document.querySelector(".subBar");
const quoteMsg = document.querySelector(".quote2");
let quote = [
  "Raise the bar by completing your goals!",
  "Well begun is half done",
  "Well done keep doing!",
  "Whoa! You just completed all the goals, time for chill :D",
];

let goals =
  JSON.parse(localStorage.getItem("goals")) ||
  {
    // first:{
    //     name:"",
    //     completed:false
    // },
    // second:{
    //     name:"",
    //     completed:false
    // },
    // third:{
    //     name:"",
    //     completed:false
    // },
  };
let goalsCount = Object.values(goals).filter((goal) => goal.completed).length;
subBar.style.width = `${(goalsCount / inputs.length) * 100}%`;
subBar.firstElementChild.innerText = `${goalsCount}/${inputs.length} Completed`;
quoteMsg.innerHTML = quote[goalsCount];

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const inputFields = [...inputs].every((input) => input.value);

    if (inputFields) {
      checkbox.parentElement.classList.toggle("completed");

      const inputId = checkbox.nextElementSibling.id;
      goals[inputId].completed = !goals[inputId].completed;
      goalsCount = Object.values(goals).filter((goal) => goal.completed).length;
      subBar.style.width = `${(goalsCount / inputs.length) * 100}%`;
      subBar.firstElementChild.innerText = `${goalsCount}/${inputs.length} Completed`;
      quoteMsg.innerHTML = quote[goalsCount];

      localStorage.setItem("goals", JSON.stringify(goals));
    } else {
      errorMsg.classList.add("error");
    }
  });
});

inputs.forEach((input) => {
  if (goals[input.id]) {
    input.value = goals[input.id].name;

    if (goals[input.id].completed) {
      input.parentElement.classList.add("completed");
    }
  }

  input.addEventListener("input", (e) => {
    if (goals[input.id] && goals[input.id].completed) {
      e.target.value = goals[input.id].name;
      return;
    }
    if (goals[input.id]) {
      goals[input.id].name = input.value;
    } else {
      goals[input.id] = {
        name: "",
        completed: false,
      };
    }

    errorMsg.classList.remove("error");
    localStorage.setItem("goals", JSON.stringify(goals));
  });
});
