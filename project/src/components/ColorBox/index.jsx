import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5); //Math.random return về con số thập phân từ 0 đến 1 , < 1
  //Math.trunc: lấy phần nguyên (0-4)
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  // const initColor = localStorage.getItem("box_color") || "deeppink";
  // chỉ chạy lần render() đầu tiên, các lần còn lại bị dư thừa --> sử dụng callback
  // const [color, setColor] = useState(initColor);

  //chạy đúng 1 lần
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    //get random color
    const newColor = getRandomColor();
    //set color
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
