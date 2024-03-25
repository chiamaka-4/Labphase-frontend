import React from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./Nav.css";
import Container from "../reusable/Container";

const Nav = () => {
  return (
    <Container className="super-container">
      <div className="sub-container">
        {/* <h5 className="glam">Glam</h5> */}
        <Link to={"/"} className="nav_link">
          <h3 className="nav_icon_cont">
            <span className="logo_span"></span>
          </h3>
        </Link>
        {
          <div className="nav_link_items">
            <Link className="nav_link" to={"/"}>
              HOME
            </Link>
            <Link className="nav_link" to={"/about"}>
              ABOUT
            </Link>
            <Link className="nav_link" to={"/gallery"}>
              GALLERY
            </Link>
            <Link className="nav_link" to={"/contact"}>
              CONTACT
            </Link>
            <Link className="nav_link" to={"/signup/"}>
              <Button>SIGN IN</Button>
            </Link>
            <Link className="nav_link" to={"/login/"}>
              <Button> LOGIN</Button>
            </Link>
          </div>
        }
      </div>
    </Container>
  );
};

export default Nav;
