const countryName = new URLSearchParams(location?.search).get("name");
const darkMode = document.querySelector(".darkmode");
// console.log(countryName);

try {
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res?.json())
    .then(([data]) => {
      // console.log(data);
      const detailContainer = document.querySelector(".detailContent");
      const nativeName = Object.values(data?.name?.nativeName);
      const languages = Object.values(data?.languages);
      const currencies = Object.values(data?.currencies);
      const borders = Object.values(data?.borders);

      // console.log(borders);

      //   console.log(currencies)
      detailContainer.innerHTML = `<img
          src=${data?.flags?.svg}
          alt="flag"
        />
        <div class="textContainer">
            <h1>${data?.name?.common}</h1>
          <div class="detailText">
            <div class="detailRightText">
              
              <p><span>Native Name:</span> ${nativeName[0]?.common}</p>
              <p><span>Population:</span> ${data?.population.toLocaleString(
                "en-IN"
              )}</p>
              <p><span>Region:</span> ${data?.region}</p>
              <p><span>Sub Region:</span> ${data?.subregion}</p>
              <p><span>Capital:</span> ${data?.capital}</p>
            </div>
            <div class="detailLeftText">
              <p><span>Top Level Domain: </span> ${data?.tld.join(",")}</p>
              <p><span>Currencies: </span> ${currencies[0]?.name}</p>
              <p><span>Language: </span> ${languages.join(",")}</p>
            </div>
          </div>
          <div class="border">
          <p>
            <span>Border Countries:</span>
            ${borders.map((border) => {
              return `<a href="detail.html?name="${countryName}>${border}</a>`;
            })}
            
            </p>
        </div>
        </div>`;
    });
} catch (error) {
  console.log(error);
}

document.body.classList.toggle(localStorage.getItem("mode"));
darkMode.addEventListener("click", () => {
  document.body.classList.toggle(localStorage.getItem("mode"));
  if (document.body.className == "dark") {
    darkMode.innerHTML = `<ion-icon name="sunny-outline"></ion-icon> Light Mode`;
  } else {
    darkMode.innerHTML = `<ion-icon name="moon-outline"></ion-icon> DarkMode`;
  }
});







