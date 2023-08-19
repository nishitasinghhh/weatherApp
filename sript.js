const apiKey="2046f38036ebf00c5bf74972a1e0a3f5";
        const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const search=document.querySelector(".search-box input");
        const searchBtn=document.querySelector(".search-box button");
        const weatherIcon=document.querySelector(".icon");
        async function checkWeather(city)
        {
            const response=await fetch(apiURL+ city+`&appid=${apiKey}`)
            if(response.status==404)
            {
                document.querySelector(".error").style.display="block"
                document.querySelector(".weather-update").style.display="none"
            }
            else
            {
                var data=await response.json();
            console.log(data)
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+ " km/hr";
            if(data.weather[0].main=="Clouds")
            {
              weatherIcon.src="img/clouds.png"
            }
            else if(data.weather[0].main=="Clear")
            {
                weatherIcon.src="img/clear.png"
            }
            else if(data.weather[0].main=="Rain")
            {
                weatherIcon.src="img/rain.png"
            }
            else if(data.weather[0].main=="Drizzle")
            {
                weatherIcon.src="img/drizzle.png"
            }
            else if(data.weather[0].main=="Mist")
            {
                weatherIcon.src="img/mist.png"
            }
            document.querySelector(".weather-update").style.display="block";
            document.querySelector(".error").style.display="none"
            }
            
        }
        searchBtn.addEventListener("click",()=>{
            checkWeather(search.value);
        })