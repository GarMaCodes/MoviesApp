const APIKEY = "f2b039439f7efbae77ffd976d4be732e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&langauge=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&langage=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fethHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchStarWars: `/search/movie?api_key=${APIKEY}&query=star wars`,
  fetchBatman: `/search/movie?api_key=${APIKEY}&query=batman`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
