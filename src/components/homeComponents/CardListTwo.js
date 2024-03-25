import React from "react";
import Card from "react-bootstrap/Card";
import CardsTwo from "./cardsTwo.js";
import "./CardListTwo.css";

const CardListTwo = () => {
  return (
    <div className="div">
      {CardsTwo.map((eachCard) => {
        return (
          <Card style={{ width: "18rem ", height: "20rem" }}>
            <Card.Img
              variant="top"
              src={eachCard.imageURL}
              style={{ height: "20rem", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title>{eachCard.title} </Card.Title>
              <Card.Text>{eachCard.description}</Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardListTwo;
