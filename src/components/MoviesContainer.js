import React, { useState, useEffect } from "react";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import MovieImage from "./MovieImage";
import instance from "../axios";
import "../css/MoviesContainer.css";

const MoviesContainer = ({ fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [baseImageURL, setBaseImageURL] = useState();
  const [imageSize, setImageSize] = useState();
  const [image_translate, setImageTranslate] = useState(0);
  const [count, setCount] = useState(0);
  const [arrow_button_color, setArrowButtonColor] = useState("transparent");
  const [arrow_color, setArrowColor] = useState("transparent");
  const [newFetch, setNewFetch] = useState(0);

  useEffect(() => {
    const APIKEY = "f2b039439f7efbae77ffd976d4be732e";
    let url = `configuration?api_key=${APIKEY}`;
    async function fetchData() {
      const data = await instance.get(url);
      //console.log(data);
      setBaseImageURL(data.data.images.secure_base_url);
      setImageSize(data.data.images.poster_sizes[1]);
      return data;
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);
      //console.log(request);
      setMovies(movies.concat(request.data.results));
      return request;
    }
    fetchData();
    // eslint-disable-next-line
  }, [fetchURL, newFetch]);

  console.log(movies);

  const handleMouseOver = () => {
    setArrowButtonColor("rgba(255, 255, 255, 0.8)");
    setArrowColor("#333");
  };

  const handleMouseOut = () => {
    setArrowButtonColor("transparent");
    setArrowColor("transparent");
  };

  return (
    <div
      className="horizontalContainer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <PreviousButton
        image_translate={image_translate}
        setImageTranslate={setImageTranslate}
        count={count}
        setCount={setCount}
        arrow_button_color={arrow_button_color}
        arrow_color={arrow_color}
      />
      <NextButton
        image_translate={image_translate}
        setImageTranslate={setImageTranslate}
        movies={movies}
        count={count}
        setCount={setCount}
        arrow_button_color={arrow_button_color}
        arrow_color={arrow_color}
        newFetch={newFetch}
        setNewFetch={setNewFetch}
      />

      {
        // eslint-disable-next-line
        movies.map((movie, index) => {
          let src = `${baseImageURL}${imageSize}${movie.poster_path}`;
          if (!src.endsWith("null")) {
            return (
              <MovieImage
                key={index}
                src={src}
                movie={movie}
                image_translate={image_translate}
              />
            );
          } else {
          }
        })
      }
    </div>
  );
};

export default MoviesContainer;
