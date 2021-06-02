import React, { useContext, Fragment, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../css/MovieDetails.css";

const MovieDetails = () => {
  const {
    movie,
    trailerURL,
    goPage,
    setTrailerURL,
    setKeyword,
    setGoPage,
  } = useContext(AppContext);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (movie === null || movie === undefined) {
    setGoPage("from_details_to_home");
  }

  if (goPage === "from_details_to_home") {
    return <Redirect to="/" />;
  }

  const handleTrailerClick = () => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const handleClick = () => {
    if (trailerURL) {
      setTrailerURL("");
    }
    setKeyword("");
    setGoPage("from_details_to_home");
  };

  return (
    <Fragment>
      <div className="movieDetailsBox">
        <img
          className="movieDetailsImage"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          title={
            movie?.title ||
            movie?.original_title ||
            movie?.name ||
            movie?.original_name
          }
          alt={
            movie?.title ||
            movie?.original_title ||
            movie?.name ||
            movie?.original_name
          }
        />

        <div className="movieInfo">
          <h1 className="title">
            {movie?.title ||
              movie?.original_title ||
              movie?.name ||
              movie?.original_name}
          </h1>

          <p className="release_date">
            Release date: &nbsp; &nbsp;{" "}
            {movie?.release_date ? (
              movie.release_date
            ) : (
              <span>unavailable</span>
            )}
          </p>
        </div>
        <p className="overview">{movie?.overview}</p>

        <p className="ratingP">Rating: {movie?.vote_average}</p>
        <div className="vote_average">
          <div className="average_number">0</div>
          <div className="graph_container">
            <div
              className="graph"
              style={{ width: `${movie?.vote_average * 10}%` }}
            ></div>
          </div>
          <div className="average_number">10</div>
        </div>
      </div>
      {trailerURL && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailerURL}`}
          playing
          volume="0.3"
          controls
          width="100%"
        />
      )}
      <div className="buttons">
        <div className="button" onClick={handleTrailerClick}>
          Movie trailer
        </div>
        <div className="button" onClick={handleClick}>
          Home
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;
