const countryContainer = document.querySelector(".countryContainer");
const filterRegion = document.querySelector(".filterRegion");
const searchInput = document.querySelector(".searchContainer input");
const darkMode = document.querySelector(".darkmode");
let allCountries;

localStorage.setItem("mode", "dark");

try {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      renderCountries(data);
      allCountries = data;
    });
} catch (error) {
  console.log(error);
}

filterRegion.addEventListener("change", (e) => {
  // console.log(e.target.value);
  try {
    fetch(`https://restcountries.com/v3.1/region/${filterRegion.value}`)
      .then((res) => res.json())
      .then(renderCountries);
  } catch (error) {
    console.log(error);
  }
});

function renderCountries(data) {
  countryContainer.innerHTML = "";
  data?.forEach((country) => {
    // console.log(country)
    const countryCardd = document.createElement("a");
    countryCardd.href = `./detail.html?name=${country?.name?.common}`;

    countryCardd.innerHTML = `<div class="countryCard">
                <img src=${country?.flags?.svg} alt="flag">
                <div class="cardText">
                    <h2>${country?.name?.common}</h2>
                <p><span>Population:</span> ${country?.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><span>Region:</span> ${country?.region}</p>
                <p><span>Capital:</span> ${country?.capital}</p>
                </div>
            </div>`;
    countryContainer?.append(countryCardd);
  });
}

searchInput.addEventListener("input", (e) => {
  let data = allCountries.filter((country) =>
    country?.name?.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderCountries(data);
});

document.body.classList.toggle(localStorage.getItem("mode"));
darkMode.addEventListener("click", () => {
  document.body.classList.toggle(localStorage.getItem("mode"));
  if (document.body.className == "dark") {
    darkMode.innerHTML = `<ion-icon name="sunny-outline"></ion-icon> Light Mode`;
  } else {
    darkMode.innerHTML = `<ion-icon name="moon-outline"></ion-icon> DarkMode`;
  }
});
// console.log(darkMode)
