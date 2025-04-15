import React from "react";
import { FaReact, FaJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";
import { AntDesignOutlined } from "@ant-design/icons";

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <FaReact style={{ color: "#61DAFB" }} /> {/* React Logo */}
            <div>
              <h3 className="skills-name">React Js</h3>
            </div>
          </div>

          <div className="skills-data">
            <SiNextdotjs style={{ color: "#000000" }} /> {/* Next.js Logo */}
            <div>
              <h3 className="skills-name">Next Js</h3>
            </div>
          </div>

          <div className="skills-data">
            <FaJs style={{ color: "#F7DF1E" }} /> {/* JavaScript Logo */}
            <div>
              <h3 className="skills-name">JavaScript</h3>
            </div>
          </div>

          <div className="skills-data">
            <span style={{ color: "#007ACC" }}>TS</span>
            <div>
              <h3 className="skills-name">TypeScript</h3>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <SiRedux style={{ color: "#764ABC" }} /> {/* Redux Logo */}
            <div>
              <h3 className="skills-name">Redux</h3>
            </div>
          </div>

          <div className="skills-data">
            <SiTailwindcss style={{ color: "#38B2AC" }} />{" "}
            {/* Tailwind CSS Logo */}
            <div>
              <h3 className="skills-name">Tailwind</h3>
            </div>
          </div>

          <div className="skills-data">
            <AntDesignOutlined style={{ color: "#1890FF" }} />
            {/* Ant Design Logo */}
            <div>
              <h3 className="skills-name">Antd</h3>
            </div>
          </div>

          <div className="skills-data">
            <FaGitAlt style={{ color: "#F05032" }} />
            <div>
              <h3 className="skills-name">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
