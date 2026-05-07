// this is my api key
const apiKey = "c01b1afecfb4eac074775446020c0e87";
const base_url = "https://api.openweathermap.org/data/2.5/weather?q="


// this the array of images link
const imgs_arr = [
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1579619572008-3fe9f19748ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1569429512518-44dad00e88db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515362790300-999394721afc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1563974318767-a4de855d7b43?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1671148804428-479b78611ebd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

// here i select all important element from page
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
const weather_icon = document.getElementById("weatherIcon")
const container = document.getElementsByClassName("container")
const humidity_l = document.getElementById("humidityBar")



// this event on  side bar
menuBtn.onclick = () => {
  sidebar.classList.add("active");
  overlay.style.display = "block";
};


// this event for close side bar
overlay.onclick = () => {
  sidebar.classList.remove("active");
  overlay.style.display = "none";
};



// this fuction on the set date on webpage
function setDate() {
  const now = new Date();
  dateEl.innerText = now.toDateString();
}



// this fuction for the formte time
function formatTime(ts) {
  const date = new Date(ts * 1000);
  return date.toLocaleTimeString({ hour: "2-digit", minute: "2-digit" });
}


// fuction for set background colour with temp
function setBackground(temp) {

  if (temp < 15) {
    document.body.style.background = "linear-gradient(135deg, #83a4d4, #b6fbff)";
  } 
  else if (temp < 30) {
    document.body.style.background = "linear-gradient(135deg, #a8edea, #fed6e3)";
  } 
  else {
    document.body.style.background =  "linear-gradient(135deg, #f6f0f1, #63e9f3)";
  }
}


// this fuction for get insight and show on webpage regarding wheather
function getInsight(temp) {
 
  if (temp > 30) {
    return "Warm conditions with noticeable humidity or wind. Stay hydrated and avoid prolonged outdoor exposure.";
  }
  
  else if (temp < 15) {
    return "Cool weather with light wind. Consider wearing a light jacket for comfort.";
  }

  else {
    return "Pleasant weather with balanced temperature, humidity, and calm winds. Ideal for outdoor activities.";
  }
}


// fuction for set icon
function set_icon(icon_c){

    const iconUrl = `https://openweathermap.org/img/wn/${icon_c}@2x.png`;

    weather_icon.src = iconUrl;
}


// change image random fuction
function changeimage(){

    const randomIndex = Math.floor(Math.random() * imgs_arr.length);

    img_1.src = imgs_arr[randomIndex];

}

// fuction for insert data on webpage
function insert_data_on_page(data){
  
    console.log(data);
    cityEl.innerText = data.name;
    countryEl.innerText = data.sys.country;
    tempEl.innerText = Math.round(data.main.temp);
    console.log(data.weather[0].description);
    descEl.innerText = data.weather[0].description;
    humidityEl.innerText = data.main.humidity + "%";
    windEl.innerHTML = data.wind.speed + " m/s";
    visibilityEl.innerHTML = data.visibility / 1000 + " km";
    pressureEl.innerHTML = data.main.pressure + " hPa";
    feelsLikeEl.innerText = Math.round(data.main.feels_like) + "°C";
    tempMinEl.innerText = Math.round(data.main.temp_min) + "°C";
    tempMaxEl.innerText = Math.round(data.main.temp_max) + "°C";
    cloudsEl.innerText = data.clouds.all + "%";
    sunriseEl.innerText = formatTime(data.sys.sunrise);
    sunsetEl.innerText = formatTime(data.sys.sunset);
}

// this fuction for render the data on web page
function show_data(data){

    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    // fuction for insert data on webpage
    insert_data_on_page(data)

    // code for set icon
    const icon_c = data.weather[0].icon;
    set_icon(icon_c)

    // set the humidity bar 
    humidity_l.style.width = data.main.humidity + "%";

    // change image and colour
    temp = Math.round(data.main.temp)

    setBackground(temp)
    changeimage()

    // set the 
    insightEl.innerText = getInsight(data.main.temp);
}


// this is the main fucnction for the fatch the data from api and render data on web page 
async function getWeather(city) {

  try {

    const res = await fetch(`${base_url}${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();


    show_data(data)
    
  } 
  catch (err) {
  
    alert("Something Went Wrong")
  }
}



// this event for the search input
searchBtn.onclick = () => {

  try{
      const city = searchInput.value;

      if (city) {
        getWeather(city);
      }

  }
  catch{
  alert("Something went wrong")
  }

};

// this event also from search input but with enter keypress
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather(searchInput.value);
  }
});


getWeather("Pune");
setDate();
