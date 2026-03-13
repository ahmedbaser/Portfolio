import React from "react";
import "./Course.css";

// course.jsx new file added

const Course = () => {
  return (
    <div className="course" id="course">
      <h2>Courses & Certifications</h2>
      <div className="timeline">
        <div className="entry">
          <div className="date">2022</div>
          <div className="details">
            <h3>Think in a Redux Way </h3>
            <p>Redux, Redux Toolkit & RTK Query</p>
            {/* <p>View Certificate </p> */}
            <a
              className="certificate-btn"
              href="https://drive.google.com/file/d/1Bu4WXxlSpEC-yyBLlBvZOQwAdb65prAI/view?usp=sharing"
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

export default Course;
