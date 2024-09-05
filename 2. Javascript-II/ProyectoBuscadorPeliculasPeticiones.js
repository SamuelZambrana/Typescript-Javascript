const tmdbKey = '';
const tmdbBaseUrl = 'developer.themoviedb.org.';
const playBtn = document.getElementById('playBtn');

const getGenres = () => {
  const genreRequestEndpoint = "Géneros";
  const requestParams = `api_key ${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl} ${genreRequestEndpoint} ${requestParams}`
  fetch() {
    try {
      const response = await fetch(urlToFetch);
      if(response.ok);
      const jsonResponse = response.json;
      console.log(jsonResponse);
      const genres = jsonResponse.genres;
      return genres

    }
    catch(error) {
      console.log(error);
    } 
}

};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "Movie Discover";
  const requestParams = `api_key ${tmdbKey}`;

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
