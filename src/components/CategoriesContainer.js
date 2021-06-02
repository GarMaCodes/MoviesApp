import React from "react";
import MoviesContainer from "./MoviesContainer";
import "../css/CategoriesContainer.css";

const CategoriesContainer = ({ category, fetchURL }) => {
  return (
    <div className="categoriesContainer">
      <div className="categoryName">
        <p>{category}</p>
      </div>
      <MoviesContainer fetchURL={fetchURL} />
    </div>
  );
};

export default CategoriesContainer;
