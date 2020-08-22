import './styles.scss';
import fetchCountries from './js/fetchCountries';
import renderMarkUp from './js/renderMarkUp';
const debounce = require('lodash.debounce');

const refs = {
    countryToSearch: document.querySelector('#country-input'),
    result: document.querySelector('div.result'),
};
renderMarkUp.parentElement = refs.result;

refs.countryToSearch.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(event) {
    renderMarkUp.clearResults();
    const value = event.target.value;
    if (value.length === 0) {
        console.log('returned');
        return;
    }
    fetchCountries(value)
        .then(response => response.json())
        .then(data => switchResult(data))
        .catch(console.log);
}
function switchResult(data) {
    if (data.length === 1) {
        console.log(data[0]);
        renderMarkUp.singleCountry(data[0]);
    }
    if (data.length >= 2 && data.length <= 10) {
        renderMarkUp.countriesList(data);
    }
    if (data.length > 10) {
        renderMarkUp.alertMoreThan10();
    }
    if (data.status == 404) {
        renderMarkUp.alertNoResult();
    }
}
