const API_KEY = "40321d7d";

const moviesDiv = document.getElementById("movies");
const favDiv = document.getElementById("favorites");
const searchInput = document.getElementById("search");
const yearInput = document.getElementById("year");
const sortSelect = document.getElementById("sort");
const loading = document.getElementById("loading");
const darkBtn = document.getElementById("darkBtn");

let moviesData = [];
let favorites = [];

async function fetchAllMovies() {
  loading.innerText = "Loading...";

  let queries = ["avengers", "batman", "harry", "john wick", "fantastic four"];

  try {
    let results = await Promise.all(
      queries.map(q =>
        fetch(`https://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
          .then(res => res.json())
      )
    );

    moviesData = results
      .map(r => r.Search || [])
      .flat();

    displayMovies(moviesData);

  } catch (err) {
    loading.innerText = "Error loading data";
  }

  loading.innerText = "";
}

function displayMovies(data) {
  moviesDiv.innerHTML = "";

  data.map(movie => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${movie.Poster}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <button onclick='addFav(${JSON.stringify(movie)})'>❤️</button>
    `;

    moviesDiv.appendChild(card);
  });
}

function addFav(movie) {
  if (!favorites.find(m => m.imdbID === movie.imdbID)) {
    favorites.push(movie);
    displayFavorites();
  }
}

function displayFavorites() {
  favDiv.innerHTML = "";

  favorites.map(movie => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${movie.Poster}">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    favDiv.appendChild(card);
  });
}

let timeout;
searchInput.addEventListener("input", () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    let value = searchInput.value.toLowerCase();

    let filtered = moviesData.filter(movie =>
      movie.Title.toLowerCase().includes(value)
    );

    displayMovies(filtered);
  }, 300);
});

yearInput.addEventListener("input", () => {
  let year = yearInput.value;

  let filtered = moviesData.filter(movie =>
    movie.Year.includes(year)
  );

  displayMovies(filtered);
});

sortSelect.addEventListener("change", () => {
  let sorted = [...moviesData];

  if (sortSelect.value === "asc") {
    sorted.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortSelect.value === "desc") {
    sorted.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  displayMovies(sorted);
});

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

fetchAllMovies();