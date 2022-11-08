import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="logoParentContainer">
        <div className="logoContainer">
          <img src="../../logo.jpg" alt="Rentenant" className="logo" />
        </div>
        <h1 className="title">entenant</h1>
      </div>
      <div className="buttonContainer">
        <NavLink exact="true" className="link" to="/privacy-policy">
          <button className="policyButton">Privacy Policy</button>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
