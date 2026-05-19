// this is the API key for OpenWeatherMap API.
const apiKey = "c01b1afecfb4eac074775446020c0e87";

// this is the base url for fetching weather data
const base_url = "https://api.openweathermap.org/data/2.5/weather?q=";


// this array contains the urls of background images 
const imgs_arr = [
  "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1474&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1547&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579619572008-3fe9f19748ea?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1569429512518-44dad00e88db?q=80&w=1470&auto=format&fit=crop"
];

// selecting all the requird elements from the dom 
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay-bg");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const cityEl = document.getElementById("city");
const dateEl = document.getElementById("date");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const humidityEl = document.getElementById("humidityValue");
const windEl = document.getElementById("windValue");
const visibilityEl = document.getElementById("visibilityValue");
const pressureEl = document.getElementById("pressureValue");
const countryEl = document.getElementById("country");
const feelsLikeEl = document.getElementById("feelsLike");
const tempMinEl = document.getElementById("tempMin");
const tempMaxEl = document.getElementById("tempMax");
const cloudsEl = document.getElementById("clouds");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");
const insightEl = document.getElementById("insightText");
const img_1 = document.getElementById("img_1");
const weather_icon = document.getElementById("weatherIcon");
const humidity_l = document.getElementById("humidityBar");


// event liseners for menu button and overlay 
menuBtn.onclick = () => {

  sidebar.classList.add("active");

  overlay.style.display = "block";
};


// event listener for overlay to close the sidebar 
overlay.onclick = () => {

  sidebar.classList.remove("active");

  overlay.style.display = "none";
};


// fuction to set the current date on the page
function setDate() {

  const now = new Date();

  dateEl.innerText = now.toDateString();
}


// formate the time 
function formatTime(timeStamp) {

  const date = new Date(timeStamp * 1000);

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}


// set the background of the page based on the temp

function setBackground(temp) {

  if (temp < 15) {

    document.body.style.background ="linear-gradient(135deg, #7F7FD5, #86A8E7, #91EAE4)";
  }

  else if (temp < 30) {

    document.body.style.background ="linear-gradient(135deg, #a8edea, #fed6e3)";
  }

  else {

    document.body.style.background = "linear-gradient(135deg, #b7efd9, #ecb6b6)";
  }
}


// fuction to provide insights based on the weather data

function getInsight(temp, humidity, wind) {

  if (temp > 30 && humidity > 70) {

    return "Hot and humid weather with warm winds. Stay hydrated and avoid long outdoor exposure.";
  }

  else if (temp < 15 && wind > 4) {

    return "Cool weather with noticeable winds. A light jacket is recommended outside.";
  }

  else {

    return "Pleasant weather with comfortable temperature and balanced atmosphere.";
  }
}


// fuction to set the weather icon based on icone code from the api
function setWeatherIcon(iconCode) {

  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  weather_icon.src = iconUrl;
}


// fuction to change the background image randomly
function changeImage() {

  const randomIndex = Math.floor(Math.random() * imgs_arr.length);

  img_1.src = imgs_arr[randomIndex];
}


// fuction to insert the weather data on the page

function insertDataOnPage(data) {

  cityEl.innerText = data.name;

  countryEl.innerText = data.sys.country;

  tempEl.innerText =Math.round(data.main.temp);

  descEl.innerText = data.weather[0].description;

  humidityEl.innerText = data.main.humidity + "%";

  windEl.innerHTML = data.wind.speed + " m/s";

  visibilityEl.innerHTML =data.visibility / 1000 + " km";

  pressureEl.innerHTML =data.main.pressure + " hPa";

  feelsLikeEl.innerText =Math.round(data.main.feels_like) + "°C";

  tempMinEl.innerText = Math.round(data.main.temp_min) + "°C";

  tempMaxEl.innerText = Math.round(data.main.temp_max) + "°C";

  cloudsEl.innerText = data.clouds.all + "%";

  sunriseEl.innerText =formatTime(data.sys.sunrise);

  sunsetEl.innerText =formatTime(data.sys.sunset);
}


// fuction to show the weathere data on  the page 
function showWeatherData(data) {

  if (data.cod != 200) {

    alert("City not found");

    return;
  }

  insertDataOnPage(data);

  const iconCode = data.weather[0].icon;

  setWeatherIcon(iconCode);

  humidity_l.style.width =data.main.humidity + "%";

  changeImage();

  setBackground(data.main.temp);

  insightEl.innerText =
    getInsight(
      data.main.temp,
      data.main.humidity,
      data.wind.speed
    );
}


// fuction to fetch the weather data from the api
async function getWeather(city) {

  try {

    const response = await fetch(`${base_url}${city}&appid=${apiKey}&units=metric`);

    const data = await response.json();

    console.log(data);

    showWeatherData(data);

  }

  catch (error) {

    console.log(error);

    alert("Something went wrong");
  }
}

// event for search button click to fetch the weather data for the city
searchBtn.onclick = () => {

  const city = searchInput.value.trim();

  if (city !== "") {

    getWeather(city);
  }
};


// event for enter key press in the search imput fo fetch the weather data for the city
searchInput.addEventListener("keypress", (event) => {

  if (event.key === "Enter") {

    const city = searchInput.value.trim();

    if (city !== "") {

      getWeather(city);
    }
  }
});


// set the current date 
setDate();

// fetch the weather data for the default city
getWeather("Pune");