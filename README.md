# 🌦️ Weather Application

A modern and responsive weather application built using **HTML**, **CSS**, and **JavaScript** that provides real-time weather information for different cities using weather API integration.

---

# 📌 Project Overview

The Weather Application allows users to search weather details for any city and view important environmental information such as temperature, humidity, wind speed, sunrise, sunset, and weather conditions.

This project focuses on learning:
- API Integration
- Fetch API
- Async/Await
- DOM Manipulation
- Dynamic Data Rendering
- Responsive UI Design

---

# 🚀 Features

## 🔍 City-Based Weather Search
Users can search weather information by entering a city name.

---

## 🌡️ Real-Time Temperature
Displays:
- Current temperature
- Minimum temperature
- Maximum temperature
- Feels-like temperature

---

## 💧 Humidity Information
Shows current humidity percentage of the selected city.

---

## 🌬️ Wind Speed Details
Displays wind speed information in real time.

---

## 🌅 Sunrise & Sunset Timing
Provides:
- Sunrise time
- Sunset time

---

## ☁️ Weather Conditions
Displays weather condition such as:
- Clear sky
- Clouds
- Rain
- Thunderstorm
- Mist

---

## 🖼️ Dynamic Weather Icons
Weather icons update dynamically based on current weather conditions.

---

## 📱 Responsive Design
Fully responsive UI that works on:
- Desktop
- Tablet
- Mobile devices

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling & Responsive Design |
| JavaScript (ES6) | Application Logic |
| Weather API | Fetch Real-Time Weather Data |

---

# 📂 Project Structure

```bash
11-weather_App_Task/
│
├── index.html
├── style.css
├── script.js
└── assets/
```

---

# ⚙️ Functionalities Explained

## 📡 API Integration

The application uses Fetch API to retrieve real-time weather data from a weather service provider.

Example:

```javascript
const response = await fetch(apiURL);
const data = await response.json();
```

---

## 🔄 Dynamic DOM Manipulation

JavaScript dynamically updates:
- Temperature
- City name
- Weather icon
- Humidity
- Wind speed

without reloading the page.

---

## 🎨 Responsive UI Design

CSS media queries are used to make the application responsive across different screen sizes.

Example:

```css
@media (max-width: 768px) {
  .container {
    width: 90%;
  }
}
```

---

# 🌐 Live Demo

https://pankajiprogrammer.github.io/ASE_TRAINING/TASK/11-weather_App_Task/

---

# 📸 Application Preview

## Main Components
- Search Box
- Temperature Display
- Weather Icon
- Weather Information Cards
- City Details

---

# 🎯 Learning Outcomes

By building this project, the following concepts were practiced:

- Working with APIs
- Async JavaScript
- Fetch API
- JSON Data Handling
- Dynamic User Interface
- Event Handling
- Responsive Frontend Development

---

# ✨ Project Highlights

✅ Real-time weather updates  
✅ Dynamic weather conditions  
✅ Modern UI design  
✅ Responsive layout  
✅ Beginner-friendly structure  
✅ API-based application  

---

# 🔥 Future Improvements

Possible future enhancements:

- 5-day weather forecast
- Dark mode
- Location-based weather
- Search history
- Weather animations
- Multiple language support

---

# 🚀 How to Run Locally

## 1️⃣ Clone Repository

```bash
git clone https://github.com/pankajiprogrammer/ASE_TRAINING.git
```

---

## 2️⃣ Open Project Folder

```bash
cd 11-weather_App_Task
```

---

## 3️⃣ Run Project

Open:

```bash
index.html
```

in your browser.

---

# 📚 Best Practices Used

- Clean folder structure
- Semantic HTML
- Responsive CSS
- Modular JavaScript
- Meaningful variable naming

---

# 👨‍💻 Author

## Pankaj Saratkar

Frontend Development Trainee  
ASE Batch 19

---

# 📄 License

This project is created for learning and educational purposes.
