// File: src/components/education/Education.jsx

import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <h2>EDUCATION</h2>
      <div className="timeline">
        <div className="entry">
          <div className="date">January 2019 - Present</div>
          <div className="details">
            <h3>Stamford University Bangladesh</h3>
            <p>B.Sc in Computer Science and Engineering</p>
            <p>CGPA: 3.89</p>
            <p>Thesis: Bangla Sign Language Detection (running)</p>
          </div>
        </div>

        <div className="entry">
          <div className="date">2017 - 2018</div>
          <div className="details">
            <h3>Higher Secondary Certificate</h3>
            <p>Udayan Higher Secondary School</p>
            <p>GPA: 4.67</p>
            <p>Group: Science</p>
          </div>
        </div>

        <div className="entry">
          <div className="date">2016</div>
          <div className="details">
            <h3>Secondary School Certificate</h3>
            <p>Dhaka Board</p>
            <p>GPA: 5.00</p>
            <p>Group: Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
