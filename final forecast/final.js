// apiKey = 'b254e0c037dbe8564d4b71c4fd50d38b';
// get all elements from html to js
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
// get todays date
const days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday', ' Thursday ' , 'Friday', ' Saturday'];
const months = ['January' , 'February' , 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const API_KEY = 'b254e0c037dbe8564d4b71c4fd50d38b';
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13? hour %12: hour;
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM';

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span
    id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ',' + date + ''+months[month]

}, 1000);

// calling the API

function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
    })
}