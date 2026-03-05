const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


//cities json list external link
const endpoint = `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function filterData(word, cities) {
    return cities.filter(place => {
        const regex = RegExp(word, 'gi'); // gi means matching lowercase or uppercase
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

function displayMatch() {
    if (!this.value) {
        suggestions.innerHTML = '';
        return;
    }

    const matchArray = filterData(this.value, cities);
    const data = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, (match) => `<span class="highlight">${match}</span>`);
        const stateName = place.state.replace(regex, (match) => `<span class="highlight">${match}</span>`);
        
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('');
    suggestions.innerHTML = data;
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);