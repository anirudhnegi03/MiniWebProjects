const weatherForm=document.querySelector(".weatherForm");
const cityInput=document.querySelector(".cityInput");
const card=document.querySelector(".card");
const apiKey="b9a82bc4c0296595714bc2b9d3128fd0";

weatherForm.addEventListener("submit",async event =>{
    event.preventDefault();

    const city=cityInput.value ;
    if(city){
        try{
            const weatherData=await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }

});

async function getWeatherData(city){
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const respone =await fetch(apiUrl);
    if(!respone.ok){
        throw new Error("could not fetch weather data");
    }
    return await respone.json();
}

function displayWeatherInfo(data){
    const {name: city,main: {temp,humidity},weather:[{description ,id}]}=data;

    card.textContent="";
    card.style.display="flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent=city;
    tempDisplay.textContent=`${(temp -273.15).toFixed(1)}°C`;
    humidityDisplay.textContent=`Humidity: ${humidity}`;
    descDisplay.textContent=description;
    weatherEmoji.textContent=getWeatherEmoji(id);

    weatherEmoji.classList.add("weatherEmoji");
    descDisplay.classList.add("descDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    tempDisplay.classList.add("tempDisplay");
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(weatherEmoji);
    card.appendChild(descDisplay);

}
function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }


}
function displayError(message){
    const errorDisplay=document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(errorDisplay);
}