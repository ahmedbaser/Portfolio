import React from "react";
import "./Internship.css";

// Internship.jsx is new file added
const Internship = () => {
  return (
    <div className="internship" id="internship">
      <h2>Work Experience</h2>
      <div className="timeline">
        <div className="entry">
          <div className="date">2025</div>
          <div className="details">
            <h3>Software Development Intern</h3>
            <p>From 24 June 2025 – 31 July 2025</p>
            <p>At DSAT School, Bangladesh (Remote)</p>
            <a href=" https://dsatschool.com" target="_blank">
              Website: dsatschool.com
            </a>
          </div>
        </div>
        <div className="entry">
          <div className="date">2025</div>
          <div className="details">
            <p>
              <span className="Internship-Discription">Description: </span>
              During this internship I helped to Identified and reported website
              bugs and technical issues to front-end and back-end developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
