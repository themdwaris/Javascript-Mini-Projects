const inputVal = document.querySelector(".inputVal");
const lowerCase = document.querySelector(".lowerCase");
const upperCase = document.querySelector(".upperCase");
const camelCase = document.querySelector(".camelCase");
const pascalCase = document.querySelector(".pascalCase");
const capitalizeCase = document.querySelector(".capitalizeCase");
const snakeCase = document.querySelector(".snakeCase");
const kebabCase = document.querySelector(".kebabCase");
const trimCase = document.querySelector(".trimCase");

const wordCapitalize = (str) => {
  if(str[0]===undefined)return
  return str[0]?.toUpperCase() + str.slice(1, str.length);
};

const toCamelCase = (str) => {
  let lowerCase = str.toLowerCase();
  let wordsArray = lowerCase.split(" ");
  const camelString = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return wordCapitalize(word);
  });
  return camelString.join("");
};

const toPascalCase = (str) => {
  let lowerCase = str.toLowerCase();
  let wordsArray = lowerCase.split(" ");
  const camelString = wordsArray.map((word) => {
    return wordCapitalize(word);
  });
  return camelString.join("");
};

const toCapitalizeCase = (str) => {
  let lowerCase = str.toLowerCase();
  let wordsArray = lowerCase.split(" ");
  const captilizeString = wordsArray.map((word) => {
    return wordCapitalize(word);
  });
  return captilizeString.join(" ");
};

const toSnakeCase = (str) => {
  return str.split(" ").join("_");
};
const toKebabCase = (str) => {
  return str.split(" ").join("-");
};
const toTrimCase = (str) => {
  return str.split(" ").join("");
};

inputVal.addEventListener("input", () => {

  lowerCase.innerText = inputVal.value.trim().toLowerCase();
  upperCase.innerText = inputVal.value.trim().toUpperCase();
  capitalizeCase.innerText = toCapitalizeCase(inputVal.value.trim());
  camelCase.innerText = toCamelCase(inputVal.value.trim());
  pascalCase.innerText = toPascalCase(inputVal.value.trim());
  snakeCase.innerText = toSnakeCase(inputVal.value.trim());
  kebabCase.innerText = toKebabCase(inputVal.value.trim());
  trimCase.innerText = toTrimCase(inputVal.value.trim());
});

// const str = "Hello my world"

// const charCapital= (str)=>{
//     return str[0].toUpperCase()+str.slice(1,str.length)
// }

// const capitalizeString = (str)=>{
//     const lowerCaseString = str.toLowerCase()
//     const wordsArray= lowerCaseString.split(" ")
//     return wordsArray.map((word)=>charCapital(word))
// }

// console.log(capitalizeString(str).join(""));
