
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

const cities = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))


function findMatch(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    }) 
}

const searchList = document.querySelector('.result')

function showMatch(){

    const placesArray = findMatch(this.value, cities)
    const html = placesArray.map(place => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`)
        return `
        <li class="result__item">
            <h2>${cityName}, ${stateName}</h2>
            <p>${place.population}</p>
        </li>`
    }).join('');
    result.innerHTML = html
}

const result = document.querySelector('.result')

const searchInput = document.querySelector("#search")
searchInput.addEventListener('input', showMatch)