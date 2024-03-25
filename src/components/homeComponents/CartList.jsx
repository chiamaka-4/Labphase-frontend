import Cart from "./Cart";
import Card from "react-bootstrap/Card";
import React from "react";
import "./CartList.css";

const CartList = () => {
  return (
    <div className="div">
      {Cart.map((eachCart) => {
        return (
          <Card style={{ width: "18rem ", height: "20rem" }}>
            <Card.Img
              variant="top"
              src={eachCart.imageURL}
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

export default CartList;
