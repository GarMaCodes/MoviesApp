import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const APIKEY = "f2b039439f7efbae77ffd976d4be732e";
  const [goPage, setGoPage] = useState(null);
  const [movie, setMovie] = useState(null);
  const [src, setSrc] = useState("");
  const [baseImageURL, setBaseImageURL] = useState();
  const [imageSize, setImageSize] = useState();
  const [trailerURL, setTrailerURL] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <AppContext.Provider
      value={{
        APIKEY,
        goPage,
        movie,
        src,
        baseImageURL,
        imageSize,
        trailerURL,
        keyword,
        setGoPage,
        setMovie,
        setSrc,
        setBaseImageURL,
        setImageSize,
        setTrailerURL,
        setKeyword,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
