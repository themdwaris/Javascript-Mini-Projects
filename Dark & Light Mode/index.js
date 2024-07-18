const darkmode = document.querySelector("#darkLight");
const darkContainer = document.querySelector("#containedDarkLight");
const container = document.querySelector(".h1Container");

const isBodyDark = JSON.parse(localStorage.getItem("darkLight"));
const isContainerDark = JSON.parse(localStorage.getItem("containedDarkLight"));

if (isBodyDark) {
  darkmode.checked = true;
}
if (isContainerDark) {
  container.checked = true;
}

bodyDark();
containerDark();

darkmode.addEventListener("change", () => {
  bodyDark();
  containerDark();
});
function bodyDark() {
  toDarkMode(darkmode, document.body, "darkLight");
}
function containerDark() {
  toDarkMode(darkContainer, container, "containedDarkLight");
}

function toDarkMode(checkbox, element, localSKey) {
  if (checkbox.checked) {
    element.classList.add("dark");
    localStorage.setItem(localSKey, true);
  } else {
    element.classList.remove("dark");
    localStorage.setItem(localSKey, false);
  }
}

darkContainer.addEventListener("change", containerDark);
