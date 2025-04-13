// File: src/components/home/Home.jsx

import React from "react";
import "./home.css";
import Data from "./Data";
import Social from "./social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <Data /> {/* Data (text content) comes first */}
          <div className="home_img"></div> {/* Image comes second */}
        </div>
      </div>
    </section>
  );
};

export default Home;
