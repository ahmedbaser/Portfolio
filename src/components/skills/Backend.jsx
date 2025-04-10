import React from "react";
import { SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Developer</h3>
      <div className="skills-box-backend">
        <div className="skills-group-backend">
          <div className="skills-data-backend">
            <SiNodedotjs style={{ color: "#68A063" }} />
            <div>
              <h3 className="skills-name">Node Js</h3>
            </div>
          </div>
          <div className="skills-data-backend">
            <TbDatabase style={{ color: "#47A248" }} />
            <div>
              <h3 className="skills-name">Mongoose</h3>
            </div>
          </div>
          <div className="skills-data-backend">
            <SiExpress style={{ color: "#000000" }} />
            <div>
              <h3 className="skills-name">Express Js</h3>
            </div>
          </div>
          <div className="skills-data-backend">
            <SiMongodb style={{ color: "#47A248" }} />
            <div>
              <h3 className="skills-name">MongoDB</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
