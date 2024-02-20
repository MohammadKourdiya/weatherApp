const apiKey ="a46a751d0faca509ac7ac7cb6e735dc7"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-button")
const searchBox = document.querySelector(".search-box")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather (city) {
    const response = await fetch(apiUrl  +city+ `&appid=${apiKey}`)
    var data =await response.json()
    if (response.status==404) {
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        
    }else{

        
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = data.main.humidity +`%`
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +`°c` 
    document.querySelector(".wind").innerHTML = data.wind.speed + `km/h`
    
    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
        
    } else if (data.weather[0].main == "Clouds") {
        
        weatherIcon.src = "images/clouds.png"
        
    } else if (data.weather[0].main == "Deizzle") {
        
        weatherIcon.src = "images/drizzle.png"
        
    } else if (data.weather[0].main == "Rain") {
        
        weatherIcon.src = "images/rain.png"
        
    } else if (data.weather[0].main == "Rain") {
        
        weatherIcon.src = "images/rain.png"
        
    
    } else if (data.weather[0].main == "Mist") {
        
        weatherIcon.src = "images/mist.png"
        
    
    } else {
        
        weatherIcon.src = "images/rain.png"
        
    }
    document.querySelector(".weather").style.display= "block"
    document.querySelector(".error").style.display="none"
    

    }
  

    

}

searchBtn.addEventListener("click" ,(eo)=>{

    checkweather(searchInput.value);
})


searchBox.addEventListener("change" , (eo)=>{
    checkweather(searchInput.value);
})
