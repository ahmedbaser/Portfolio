// File: src/component/home/Home.jsx

import React from "react";
import "./home.css";
import Data from "./data";
import Social from "./social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <Data /> {/* Data (text content) comes first */}
          <div className="home_img"></div> {/* Image comes second */}
          {/* You can adjust the placement of Social icons based on your desired layout */}
          {/* For example, to place them below the text: */}
          {/* <Social /> */}
        </div>
        {/* If you want the social icons on the left (as in the original code), keep them here: */}
      </div>
    </section>
  );
};

export default Home;
