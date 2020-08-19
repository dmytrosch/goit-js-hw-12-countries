import countriesTemplate from '../templates/countriesArrayTemplate.hbs';
import countryTemplate from '../templates/countryTemplate.hbs';
import { alert, notice, info, success, error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'




export default {
    parentElement: {},
    singleCountry(data) {
        const markUp = countryTemplate(data);
        this.toRender(markUp);
    },
    countriesList(data) {
        const markUp = countriesTemplate(data);
        this.toRender(markUp);
    },
    alertNotify() {
        const options = {
            delay: 3000,
            sticker: false,
            remove: false,
            stack: new Stack({
                dir1: 'down',
                firstpos1: 25,
                modal: false,
                maxOpen: Infinity
              }),
        }
        alert({
            text: "Too many matches found. Please enter a more specific query!",
            delay: 3000,
            sticker: false,
            remove: false,
            stack: new Stack({
                dir1: 'down',
                firstpos1: 25,
                modal: false,
                maxOpen: Infinity
              })});
        
    },
    toRender(markUp) {
        this.parentElement.insertAdjacentHTML('afterbegin', markUp);
    },
    clearResults(){
        this.parentElement.innerHTML = '';
    },
};
