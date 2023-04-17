const totalCasesEl = document.getElementById('total-cases');
const totalDeathsEl = document.getElementById('total-deaths');
const totalRecoveredEl = document.getElementById('total-recovered');

fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => {
    const globalData = data.Global;
    const totalCases = globalData.TotalConfirmed;
    const totalDeaths = globalData.TotalDeaths;
    const totalRecovered = globalData.TotalRecovered;

    totalCasesEl.textContent = totalCases.toLocaleString();
    totalDeathsEl.textContent = totalDeaths.toLocaleString();
    totalRecoveredEl.textContent = totalRecovered.toLocaleString();
  })
  .catch(error => console.error(error));

  

