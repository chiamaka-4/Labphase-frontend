import React from "react";
import Fashion from "../components/homeComponents/Fashion";
import CardSection from "../components/homeComponents/CardSection";
import CardSectionOne from "../components/homeComponents/CardSectionOne";
import Footer from "../components/homeComponents/footer";
import Copyright from "../components/homeComponents/copyright";
import "./Home.css";
import CardsSectionTwo from "../components/homeComponents/CardsSectionTwo";
import CardSectionThree from "../components/homeComponents/CardSectionThree";

const Home = () => {
  return (
    <div className="background">
      <Fashion />
      <CardSectionOne />
      <CardSection />
      <CardsSectionTwo />
      <CardSectionThree />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
