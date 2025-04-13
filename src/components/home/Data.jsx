// File: src/components/home/Data.jsx

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
        Innovative, meticulous, and adaptive Web Application Developer with over
        one year of hands-on experience through Self Learning. Proficient in
        multiple programming languages, including JavaScript, React.js, Next.js
        and Node.js. Continuously expanding technical expertise and creative
        problem-solving abilities by building dynamic, responsive, and
        user-focused web applications.
      </p>
      <a href="#" className="download-button">
        Download CV
        <span className="download-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M12 16V4M17 11l-5 5-5-5" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default Data;
