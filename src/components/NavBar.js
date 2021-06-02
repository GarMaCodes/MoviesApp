import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SearchIcon from "./SearchIcon";
import "../css/NavBar.css";

const NavBar = ({ logo }) => {
  const { keyword, setKeyword } = useContext(AppContext);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="nav">
      <h1>{logo}</h1>
      <div className="search">
        <form className="form">
          <input
            type="text"
            name="keyword"
            placeholder="Search..."
            value={keyword}
            onChange={handleChange}
          />
        </form>
        <SearchIcon />
      </div>
    </div>
  );
};

export default NavBar;
