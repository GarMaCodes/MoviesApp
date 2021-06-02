import React from "react";
import "../css/NextButton.css";

const NextButton = ({
  image_translate,
  setImageTranslate,
  movies,
  count,
  setCount,
  arrow_button_color,
  arrow_color,
  newFetch,
  setNewFetch,
}) => {
  const mayorQue = ">";
  const move_foreward = -130;

  const handleClick = () => {
    setCount(count + 1);
    //if (count < movies.length - 8) {
    let advance = image_translate + move_foreward;
    setImageTranslate(advance);
    //}
    if (count === 8) {
      setNewFetch(newFetch + 1);
      setCount(0);
    }
  };

  return (
    <div
      className="nextArrow"
      style={{ backgroundColor: arrow_button_color }}
      onClick={handleClick}
    >
      <span className="icons" style={{ color: arrow_color }}>
        {mayorQue}
      </span>
    </div>
  );
};

export default NextButton;
