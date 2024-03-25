import React from "react";
import "./AboutUs.css";
import Copyright from "../components/homeComponents/copyright";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="about">
        <h3> About Us</h3>
        <div>
          <p className="welcome">
            {" "}
            Welcome to AmakaBlog, your ultimate destination for all things
            fashion and style! We are passionate about bringing you the latest
            trends, insightful tips, and inspiring content to help you elevate
            your fashion game. At AmakaBlog, we believe that fashion is not just
            about what you wear; it's a form of self-expression, creativity, and
            confidence. Whether you're a fashion enthusiast looking for fresh
            ideas or someone exploring their personal style journey, we're here
            to guide and inspire you every step of the way.
          </p>
        </div>
      </div>
      <div className="divs">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}./whiteFashion.avif`}
            className="my-img"
            alt="My Image"
          />
        </div>

        <div>
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower individuals to embrace their unique style
            and feel confident in their own skin. Through our curated content,
            including articles, guides, fashion news, and interviews with
            industry experts, we aim to provide a platform that celebrates
            diversity, inclusivity, and creativity in fashion. From timeless
            classics to cutting-edge trends, from casual chic to red carpet
            glamour, AmakaBlog covers a wide range of topics to cater to every
            style preference and occasion.Join our fashion community today and
            embark on a journey of style discovery and self-expression. Let's
            redefine fashion together, one outfit at a time! Stay stylish,
            AmakaBlog Team
          </p>
        </div>
      </div>

      <footer className="sticky">
        <Container>
          <div className="footer">
            <div className="container-1">
              <div className="row">
                <div className="col-md-6 col-lg-5 col-12">
                  <h2 className="logo">FashionFinesse</h2>
                  <p className="paragraph_1">
                    you can reach us on our various social media handles
                  </p>
                  <div className="footer_icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12">
                  <div className="quick-link">
                    <h3>Quick Links</h3>
                  </div>
                  <ul>
                    <div className="sub_container">
                      {/* <h5 className="glam">Glam</h5> */}
                      <Link to={"/"} className="nav_links">
                        <h3 className="nav_icons_cont">
                          <span className="logos_span"></span>
                        </h3>
                      </Link>
                      {
                        <div className="nav_links_items">
                          <Link className="nav_links" to={"/"}>
                            HOME
                          </Link>
                          <Link className="nav_links" to={"/about"}>
                            ABOUT
                          </Link>

                          <Link className="nav_links" to={"/contact"}>
                            CONTACT
                          </Link>
                          <Link className="nav_links" to={"/shop"}>
                            SHOP
                          </Link>
                        </div>
                      }
                    </div>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 contact_info">
                  <h3>Contact Info</h3>
                  <p>
                    <i class="fa-solid fa-phone-volume"></i> +2348033809405
                  </p>
                  <p>
                    <i class="fa-solid fa-envelope"></i>{" "}
                    Nwosuchiamaka18@gmail.com
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-paper-plane"></i> Lagos Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <Copyright />
    </div>
  );
};

export default AboutUs;
