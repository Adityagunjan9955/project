const apiKey="ffc74801fbf4252f23ad2ab80b0ac857";
async function getWeather(){
const city=document.getElementById("city").value;
if(city==""){
    alert("Please enter a city name");
    return;
}
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try{
  const response=await fetch(url);
  const data=await response.json();
  if(!response.ok){
    throw new Error(data.message);
  }
  document.getElementById("weather").innerHTML=
  `<h2>${data.name}</h2>
  <p>
   Temperature: ${(data.main.temp)}°C
  </p> 
  <p>Weather: 
    ${data.weather[0].description}
  </p> 
  <p> 
   humidity: ${data.main.humidity}%
  </p>
  <p>
   Feels like: ${data.main.feels_like}°C
  </p>
  <p>
   Wind speed: ${data.wind.speed} m/s
  </p>
  <p>
   Pressure: ${data.main.pressure} hPa
  </p>
`;
  }
catch(error){
  console.error(error);
  document.getElementById("weather").innerHTML=error.message;
}
}