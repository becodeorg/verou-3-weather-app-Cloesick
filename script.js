let weather = {
    "apikey": "687a0170dedccd305846958f004f8301",
    fetchWeather: function(city){
        fetch(
            "https//:"
            + city
            + "&units=metric&appid="
            + this.apikey
        )
        .then((respons)=> respons.json())
        .then((data)=> console.log(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} == data.main;
        const { speed} = data.wind;
        // console.log( name, icon, description, temp, humidity, speed)
        document.querySelector('city').innerText = "Weather in" + name;
        document.querySelector('.icon').src="//insert icon//" + icon + ".png"
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C" ;
        document.querySelector('.humidity').innerText = "Humidity" + "%";
        document.querySelector('.wind').innerText = "Wind Speed" + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('"https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this. fetchWeather(document.querySelector(".search-button"))
    },
};

document
    .querySelector(".search button")
    .addEventListener(weather.search()
    .addEventListener("click", function(){
        weather.search();
    });

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
    
weather.fetchWeather("Denver");



















// fetch(''){
//     .then(res => res
//         {
//             if(res.ok){
//                 console.log ('succes')
                
//             }else{
//                 console.log ('no succes')
//             }
//         }
    
        

//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))
// }