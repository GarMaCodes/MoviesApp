import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../css/SearchIcon.css";

const SearchIcon = () => {
  const { goPage, setGoPage } = useContext(AppContext);

  if (goPage === "to_search") {
    return <Redirect to="/search-movie" />;
  }

  const handleClick = () => {
    setGoPage("to_search");
  };

  return (
    <div className="searchIcon" onClick={handleClick}>
      L
    </div>
  );
};

export default SearchIcon;
