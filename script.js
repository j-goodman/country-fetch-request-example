let fetchData = () => {
    let countryName = countryInput.value
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        countryNameElement.innerText = `Name: ${data[0].name.common}`
        countryPopulationElement.innerText = `Population: ${data[0].population.toLocaleString()}`
        countryCapitalElement.innerText = `Capital: ${data[0].capital[0]}`
    })
}

let countryInput = document.getElementById("country-input")
let searchButton = document.getElementById("search-button")
searchButton.onclick = fetchData

let countryNameElement = document.getElementById("country-name")
let countryCapitalElement = document.getElementById("country-capital")
let countryPopulationElement = document.getElementById("country-population")
