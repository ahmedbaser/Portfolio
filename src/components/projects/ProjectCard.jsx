// File: src/components/projects/ProjectCard.jsx

import React from "react";
import "./project.css"; // Import the CSS file

const ProjectCard = ({
  title,
  description,
  imageUrl,
  liveLink,
  clientCodeLink,
  serverCodeLink,
}) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-links">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live"
            >
              live
            </a>
          )}
          {clientCodeLink && (
            <a
              href={clientCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="client-code"
            >
              client code
            </a>
          )}
          {serverCodeLink && (
            <a
              href={serverCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="server-code"
            >
              server code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
