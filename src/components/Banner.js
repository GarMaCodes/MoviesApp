import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../css/Banner.css";

const Banner = () => {
  const { movie, goPage, setGoPage } = useContext(AppContext);

  if (goPage === "to_details") {
    return <Redirect to="/movie-details" />;
  }

  const handleClick = () => {
    setGoPage("to_details");
  };

  const limitText = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.original_title ||
            movie?.title ||
            movie?.name ||
            movie?.original_name}
        </h1>

        <div className="more" onClick={handleClick}>
          More details
        </div>

        <h1 className="banner_description">
          {limitText(movie?.overview, 100)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
