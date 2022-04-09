import React from "react";
import "./hero.css";
import profile from "../../assets/profile.jpeg";
import Svg from "../Svg";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__content-wrapper">
        <div className="hero__content">
          <h1 className="hero__heading">
            Hi, I'm <span>Akhil</span>
          </h1>
          <h3 className="hero__subheading">
            Web Developer | ReactJs | ThreeJs
          </h3>
          <p>
            I design and develop amazing sites using ReactJs
            <br />A cup of coffee boosts the Creativity in a designer
          </p>
        </div>
        <div className="hero__image">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="svg__container">
        <Svg />
        <Svg />
      </div>
    </div>
  );
}

export default Hero;
