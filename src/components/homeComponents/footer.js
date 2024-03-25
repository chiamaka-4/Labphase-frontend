import "./footer.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <footer>
      <Container className="cover">
        <div className="footer">
          <div className="container-1">
            <div className="row">
              <div className="col-md-6 col-lg-5 col-12">
                <h2 className="logo">AmakaBlog</h2>
                <p className="paragraph_1">Connect with us on social media</p>
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
                        <Link className="nav_links" to={"/gallery"}>
                          GALLERY
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
                  <i class="fa-solid fa-envelope"></i> Nwosuchiamaka18@gmail.com
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
  );
};

export default footer;
