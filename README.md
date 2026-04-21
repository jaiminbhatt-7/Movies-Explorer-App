# 🎬 Movie Explorer Web App

## 📌 Project Overview

Movie Explorer is a web application that allows users to browse and explore movies using a public API.
The application demonstrates core web development concepts such as API integration, DOM manipulation, and the use of JavaScript array methods.
Deployed Link: https://movies-explorer-app-007.netlify.app/

---

## 🎯 Objectives

The main objectives of this project are:

* To understand how to fetch data from an API
* To display dynamic content on a webpage
* To implement search, filter, and sorting functionalities
* To build a clean and responsive user interface

---

## 🚀 Features

### 🔍 Search Functionality

Users can search movies by title using a search bar.
Implemented using **debouncing** and `filter()` for efficient results.

### 🎯 Filter by Year

Users can filter movies based on release year.

### 🔃 Sorting

Movies can be sorted:

* Alphabetically (A–Z)
* Reverse Alphabetically (Z–A)

### ⭐ Favorites Section

Users can add movies to a favorites list.
This is implemented using a simple JavaScript array (no local storage).

### 🌙 Dark Mode

Users can toggle between light mode and dark mode for better user experience.

### 🔥 Recommended Movies

The app displays a list of recommended movies by combining results from multiple API queries.

### ⏳ Loading Indicator

A loading message is shown while data is being fetched.

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript
* OMDb API

---

## 🌐 API Used

This project uses the **OMDb API (Open Movie Database)**.

Base URL:
https://www.omdbapi.com/

---

## ⚙️ How It Works

1. Multiple API requests are made using `fetch()` and `Promise.all()`
2. The results are combined into a single array
3. Data is displayed dynamically using DOM manipulation
4. Array Higher Order Functions are used:

   * `map()` → Display movies
   * `filter()` → Search & filter
   * `sort()` → Sorting

---

## 📁 Project Structure

```
movie-explorer/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## ▶️ How to Run the Project

1. Clone or download the repository
2. Open `script.js`
3. Add your API key:

   ```js
   const API_KEY = "get a free key at omdbapi.com";
   ```
4. Open `index.html` in your browser

---

## 🧠 Learning Outcomes

Through this project, I learned:

* How to work with APIs using fetch()
* How to manipulate the DOM dynamically
* How to use JavaScript array methods effectively
* How to structure a web project properly
* Basic UI/UX improvements using CSS

---

## ⚠️ Limitations

* The OMDb API does not provide a direct "all movies" or "recommendations" endpoint
* Recommendations are simulated using multiple predefined queries

---

## 🚀 Future Improvements

* Add movie details popup
* Implement pagination or “Load More”
* Improve UI design further
* Add remove from favorites feature

---

## 👨‍💻 Author

BTech First Year Student Project
Built as part of a JavaScript and Web Development assignment

---

## 💡 Final Note

This project focuses on applying fundamental concepts in a simple and effective way while maintaining clean and readable code.
