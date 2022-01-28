// apiKey = 'b254e0c037dbe8564d4b71c4fd50d38b'
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

    timeEl.innerHTML =
			hoursIn12HrFormat +
			":" +
			minutes +
			" " +
			`<span id="am-pm">${ampm}</span>`;

    dateEl.innerHTML = days[day] + ',' + date + '' +months[month]

}, 1000);

// calling the API

getWeatherData()
function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        

        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric& exclude=hourly,minutely&appid=${API_KEY}`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
                        showWeatherData(data);
					});

    })
}
    //console.log (getWeatherData)
    function showWeatherData(data){
        let {humidity, pressure, sunrise, sunset, wind_speed}
    = data.current;

    currentWeatherItemsEl.innerHTML = `<div class="weather-item">
        <div>Humidity</div>
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed </div>
        <div>${wind_speed}</div>
    </div>

    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
    </div>

    `;

    let otherDayForecast= ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            
        }else{
            otherDayForecast += `
<div class="weather-forecast-item">
<div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
<div class="temp">Night - ${day.temp.night}&#176; C</div>
<div class="temp">Day - ${day.temp.day}&#176; C</div>
</div>

`;
        }
    })

    weatherForecastEl.innerHTML = otherDayForecast;

}



