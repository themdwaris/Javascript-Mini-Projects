const generateMeme = document.querySelector(".btn");
const title = document.querySelector(".title");
const image = document.querySelector("img");
const author = document.querySelector(".author");
const box = document.querySelector(".box");

const url = "https://meme-api.com/gimme/wholesomememes";

generateMeme.addEventListener("click", () => {
  generateMemes();
});

const generateMemes = async () => {
  try {
  
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
   
    title.innerText = data?.title;
    image.src = data?.url;
    author.innerText = `By: ${data?.author}`;
  } catch (error) {
    console.log(error);
  }
};

generateMemes();
