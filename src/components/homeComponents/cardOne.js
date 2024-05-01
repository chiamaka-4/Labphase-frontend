import React from "react";
import { cards } from "./cards";

const CardOne = () => {
  return (
    <div className="africa">
      {" "}
      <img src={cards.imageURL} alt={cards.title} />
      <h3>{cards.title}</h3>
      <p>{cards.description}</p>
    </div>
  );
};

export default CardOne;
