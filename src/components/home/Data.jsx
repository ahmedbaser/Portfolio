// File: src/component/home/Data.jsx

import React from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">
        <span className="first-title">Hello There</span>
        <span className="type-animation-wrapper">
          <br></br>
          <TypeAnimation
            sequence={[
              "I'm Baser Ahmed Shiplu !", // Original line
              1000,
              "I'm a Web Developer !", // Added line 1
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </span>

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home_hand"
        >
          {/* SVG content remains the same (if you are keeping it) */}
        </svg>
      </h1>

      {/* <h3 className="home_subtitle">Web Application Developer</h3> */}
      <p className="home_description">
        Dynamic, detail-oriented and responsive Web Application Developer with
        over one year of experience in Self Learning. Skilled in a variety of
        programming languages, including JavaScript, React Js, and Node.js. Hold
        a Bachelor's degree in Computer Science from Stamford University
        Bangladesh. Maintain several open source projects.
      </p>
      <a href="#" className="button button--flex">
        Download CV
        <svg
          className="button_icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* You can add an arrow icon here if you want */}
        </svg>
      </a>
    </div>
  );
};

export default Data;
