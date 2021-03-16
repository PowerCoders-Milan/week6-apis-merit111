
fetch('http://api.openweathermap.org/data/2.5/weather?q=Banjul&units=metric&appid=09040e61fd98ee56933d91a6e018ff22')
    .then(response => response.json())
    .then(data => {
        let body = document.querySelector("body");
        let p = document.createElement("div");
        let p1 = document.createElement("p");
        let p2= document.createElement("p");
        let p3 = document.createElement("p3")
        body.appendChild(p);
        p.appendChild(p1);
        p.appendChild(p2);
        p.appendChild(p3);
        p1.innerHTML=data.name;
        p2.innerHTML = data.main.temp;
        p3.innerHTML = data.weather[0].main;
        console.log(data);
        console.log(data.main.tem);
        console.log()
    });



























    // function showPosition() {
    //     if(navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
    //             document.getElementById("result").innerHTML = positionInfo;
    //         });
    //     } else {
    //         alert("Sorry, your browser does not support HTML5 geolocation.");
    //     }
    // }

























// var currentWeather;
// function initMap() {
//   currentWeather = new google.weather.weather(document.getElementById('weather'), {
//     center: {lat: 45.526001, lng: 9.172130},
//     zoom: 8
//   });
// }


// var combined = city + ',' + country;
// weatherkey = '****'
// url = 'https://api.openweathermap.org/data/2.5/weather'
// params = {'APPID' : weatherkey, 'q' : combined, 'units' : 'metric'}
// response = requests.get(url, params = params)
// weather = response.json()

// desc = string.capwords(str(weather['weather'][0]['description']))
// temp = str(round(weather['main']['temp'], 1)) + '°C'

// print(desc)
// print(temp)














