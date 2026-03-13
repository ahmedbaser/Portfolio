import React from "react";
import "./Honor.css";

// honor.jsx new file added
const Honor = () => {
  return (
    <div className="honor" id="honor">
      <h2>Honors and Awards</h2>
      <div className="timeline">
        <div className="entry">
          <div className="date">2025</div>
          <div className="details">
            <h3>ICT Olympiad Bangladesh Season 2</h3>
            <p>Quarter Finalist </p>
            {/* <p>View Certificate </p> */}
            <a
              className="certificate-btn"
              href="https://drive.google.com/file/d/1L640NXqhODFR3f-oeepj10iQPyF_scdL/view?usp=sharing"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </div>
        <div className="entry">
          <div className="date">2010</div>
          <div className="details">
            <h3>Kanihati English Olympaid </h3>
            <p>Participant</p>
            {/* <p>View Certificate </p> */}
            <a
              className="certificate-btn"
              href="https://drive.google.com/file/d/1nUtg5cz24vCU1rqk1HEGcrWw9IgcU-4Z/view?usp=sharing"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honor;
