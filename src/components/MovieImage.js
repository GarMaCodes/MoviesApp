import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../css/MovieImage.css";

const MovieImage = ({ movie, src, image_translate }) => {
  const { goPage, setMovie, setGoPage, trailerURL, setTrailerURL } = useContext(
    AppContext
  );

  const [scale, setScale] = useState(1);

  if (goPage === "from_image_to_details") {
    return <Redirect to="/movie-details" />;
  }

  const handleMouseOver = () => {
    setScale(1.05);
  };

  const handleMouseOut = () => {
    setScale(1);
  };

  const handleClick = () => {
    if (window.location.href.indexOf("search-movie") > -1) {
      if (trailerURL) {
        setTrailerURL("");
      }
      setMovie(movie);
      setGoPage("from_image_to_details");
    } else {
      setMovie(movie);
    }
  };

  return (
    <img
      className="image"
      src={src}
      title={
        movie?.original_title ||
        movie?.title ||
        movie?.name ||
        movie?.original_name
      }
      alt={
        movie?.original_title ||
        movie?.title ||
        movie?.name ||
        movie?.original_name
      }
      style={{ transform: `translateX(${image_translate}px) scale(${scale})` }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    />
  );
};

export default MovieImage;

/*poster.src = `${baseImageURL}${imageSize}${movie.poster_path}`;
        poster.title = 'Imagen de ' + movie.original_title;
        if(!poster.src.endsWith("null")){
            element.horizontalContainer.append(poster);
        }*/
