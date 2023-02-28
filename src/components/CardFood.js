import React from "react";

const CardFood = ({ el }) => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "300px",
        height: "450px",
        border: "solid black 2px",
        margin: "15px",
      }}
    >
      <img src={el.food.image} alt="" />
      <h3>{el.food.label}</h3>
      <button>GET DETAILS</button>
    </div>
  );
};

export default CardFood;
