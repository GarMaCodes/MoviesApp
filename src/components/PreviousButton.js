import React from "react";
import "../css/PreviousButton.css";

const PreviousButton = ({
  image_translate,
  setImageTranslate,
  count,
  setCount,
  arrow_button_color,
  arrow_color,
}) => {
  const menorQue = "<";
  const move_back = 130;

  const handleClick = () => {
    if (image_translate < 0) {
      let advance = image_translate + move_back;
      setImageTranslate(advance);
      setCount(count - 1);
    }
  };

  return (
    <div
      className="previousArrow"
      style={
        image_translate < 0 ? { backgroundColor: arrow_button_color } : null
      }
      onClick={handleClick}
    >
      <span
        className="icons"
        style={image_translate < 0 ? { color: arrow_color } : null}
      >
        {menorQue}
      </span>
    </div>
  );
};

export default PreviousButton;
