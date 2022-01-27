api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}// apiKey = 687a0170dedccd305846958f004f8301
apiKey=687a0170dedccd305846958f004f8301
example city: London

function GetInfo(){
    const newName= document.getElementById("cityName");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML="--"+newName.value+"--";
}

fetch("api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=metric&appid=values;={API key}// apiKey =687a0170dedccd305846958f004f8301");
//now adding the '+newName.value+'
.then(response => response.json())
.then(data =>
    {
        for(i=0; i<5; i++){
            document.getElementById("day"+
            (i+1)+("Min").innerHTML = "Min:" + 
            Number(data.list[i].main.temp_min -280.14).toFixed(1)+"°");
        }
        for(i=0; i<5; i++){
            document.getElementById("day"+
            (i+1)+("Max").innerHTML = "Max:" + 
            Number(data.list[i].main.temp_max -281.18).toFixed(1)+"°");
        }
        for(i=0; i<5; i++){
            document.getElementById("day"+
            (i+1)+("Max").innerHTML = "Max:" + 
            Number(data.list[i].main.temp_max -281.18).toFixed(1)+"°");
        }
        
//How to get icon URL
// For code 500 - light rain icon = "10d". See below a full list of codes
// URL is http://openweathermap.org/img/wn/10d@2x.png
// http://openweathermap.org/img/wn
// refer to the weather icon through the data => list => weather => icon
// loop through the website 5times for 5 days

        for(i=0; i<5; i++){
            document.getElementById("day"+
            (i+1)+("Max").innerHTML = "Max:" + 
            document.getElementById("img" + (i+1)).src ="http://openweathermap.org/img/wn" + data.list[i].weather[0].icon+".png"
            );
        }
    })

    .catch(err => alert("Data not found"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}

const a = new Date ();
weekday= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function CheckDay(day){
    if(day + day.getDay()>6){
        return day +day.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}
for(i=0; i<5; i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday [CheckDay(i)];
}

        
//above searched for the min temp within the data => list => main => temp_min => 280.14
// toFixed makes sure that the rounding is done till 1 decimal after the comma.
// {
//   "cod": "200",
//   "message": 0,
//   "cnt": 40,
//   "list": [
//     {
//       "dt": 1643274000,
//       "main": {
//         "temp": 281.18,
//         "feels_like": 278.5,
//         "temp_min": 280.14,
//         "temp_max": 281.18,
    