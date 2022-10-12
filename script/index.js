const API_KEY = "f22108699d11488222edf3226999688e";
const listMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const imagePath = "https://image.tmdb.org/t/p/original/";
const konten = document.getElementById("konten");
const key_search = document.getElementById("key-search");
let arr = [];

awal();

function awal() {
  fetch(listMovieUrl)
    .then((response) => response.json())
    .then((commits) => {
      commits.results.map((e) => {
        konten.innerHTML += `
      <div class="col-md-4 p-3">
      <div class="card bg-dark text-white shadow-lg rounded border border-white">
      <img src="${imagePath}${e.poster_path}" class="card-img-top" alt="...">
      <div class="card-body">
      <div class="d-flex aling-items-center justify-content-between">
            <p class="card-title">${e.title}</p>
            <p class="card-text">${e.vote_average}</p>
            </div>
      <br/>
      <p>${e.release_date}</p>  
      </div>
      </div>
      </div>
  `;
      });
    });
}

key_search.addEventListener("keyup", () => {
  konten.innerHTML = "";
  if (key_search.value == "") {
    return awal();
  } else {
    fetch(searchUrl + key_search.value)
      .then((response) => response.json())
      .then((commits) => {
        commits.results.map((e) => {
          konten.innerHTML += `
          <div class="col-md-4 p-3">
            <div class="card" style="width: 18rem;">
            <img src="${imagePath}${e.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex aling-items-center justify-content-between">
                  <p class="card-title">${e.title}</p>
                  <p class="card-text">${e.vote_average}</p>
            </div>
            <br/>
            <p>${e.release_date}</p>  
            </div>
            </div>
          </div>
      `;
        });
      });
  }
});
