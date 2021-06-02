import React, { useState, useEffect, useContext, Fragment } from "react";
import { Redirect } from "react-router-dom";
import instance from "../axios";
import { AppContext } from "../context/AppContext";
import MovieImage from "./MovieImage";
import "../css/SearchMovie.css";

const SearchMovie = () => {
  const {
    goPage,
    APIKEY,
    keyword,
    setGoPage,
    setKeyword,
    trailerURL,
    setTrailerURL,
  } = useContext(AppContext);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (keyword !== "") {
      let url = `/search/movie?api_key=${APIKEY}&query=${keyword}`;
      async function fetchData() {
        const request = await instance.get(url);
        setSearchMovies(request.data.results);
        return request;
      }
      fetchData();
      // eslint-disable-next-line
    }
  }, [keyword, APIKEY]);

  if (goPage === "from_search_to_home") {
    return <Redirect to="/" />;
  }

  const handleClick = () => {
    if (trailerURL) {
      setTrailerURL("");
    }
    setKeyword("");
    setGoPage("from_search_to_home");
  };

  return (
    <Fragment>
      <div className="foundImages">
        {keyword ? ( // eslint-disable-next-line
          searchMovies.map((movie) => {
            let src = `https://image.tmdb.org/t/p/original/${movie?.poster_path}`;
            if (!src.endsWith("null")) {
              return (
                <div className="image_window" key={movie.id}>
                  <MovieImage src={src} movie={movie} />
                </div>
              );
            } else {
            }
          })
        ) : (
          <p className="no_results">
            No results were found for your search ({keyword})
          </p>
        )}
      </div>
      <div className="search_to_home">
        <div className="button" onClick={handleClick}>
          Home
        </div>
      </div>
    </Fragment>
  );
};

export default SearchMovie;
