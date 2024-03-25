import { cards } from "./cards";
import Card from "react-bootstrap/Card";
import React from "react";
import "./cardList.css";

const CardList = () => {
  return (
    <div className="div">
      {cards.map((eachCard) => {
        return (
          <Card style={{ width: "18rem ", height: "20rem" }}>
            <Card.Img
              variant="top"
              src={eachCard.imageURL}
              style={{ height: "20rem", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Body></Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardList;
