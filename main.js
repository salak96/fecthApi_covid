const totalCasesEl = document.getElementById('total-cases');
const totalDeathsEl = document.getElementById('total-deaths');
const totalRecoveredEl = document.getElementById('total-recovered');
// search
const searchEl = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchResultEl = document.getElementById('search-result');


fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
    const globalData = data.Global;
    const totalCases = globalData.TotalConfirmed;
    const totalDeaths = globalData.TotalDeaths;
    const totalRecovered = globalData.TotalRecovered;

    totalCasesEl.innerHTML = totalCases.toLocaleString();
    totalDeathsEl.innerHTML = totalDeaths.toLocaleString();
    totalRecoveredEl.innerHTML = totalRecovered.toLocaleString();
    
    let countries = [];
    
    data.Countries.forEach(country => {
        countries.push(country.Country);
    });
    searchBtn.addEventListener('click', () => {
        searchResultEl.innerHTML = '';
        const searchValue = searchEl.value;
        if (searchValue === '') {
            alert('Please enter a country name');
        } else {
            const searchResult = data.Countries.filter(country => {
                return country.Country.toLowerCase().includes(searchValue.toLowerCase());
            });
            if (searchResult.length === 0) {
                alert('No result found');
            } else {
                searchResult.forEach(country => {
                    const countryEl = document.createElement('div');
                    countryEl.classList.add('country');
                    countryEl.innerHTML = `
                        <h3>${country.Country}</h3>
                        <p>Total Confirmed: ${country.TotalConfirmed}</p>
                        <p>Total Deaths: ${country.TotalDeaths}</p>
                        <p>Total Recovered: ${country.TotalRecovered}</p>
                    `;
                    searchResultEl.appendChild(countryEl);
                });
            }
        }
    });


  })
  .catch(error => console.error(error));

  

