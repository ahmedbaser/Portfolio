import React from "react";
import ProjectCard from "./ProjectCard";
import "./project.css";

const Project = () => {
  const projectsData = [
    {
      title: "Fit Flex",
      description:
        "A MERN Stack Application where client can admin panel have implemented with payment method also.",
      imageUrl: "/images/fitflex.png", // Replace with the actual path to your image
      liveLink: "#", // Replace with the actual live link
      clientCodeLink: "#", // Replace with the actual client code link
      serverCodeLink: "#", // Replace with the actual server code link
    },
    {
      title: "Skill Approved",
      description:
        "An online marketplace website where user can find job based on category and apply for it. Also can add job.",
      imageUrl: "/images/skillapproved.png", // Replace with the actual path to your image
      liveLink: "#", // Replace with the actual live link
      clientCodeLink: "#", // Replace with the actual client code link
      serverCodeLink: "#", // Replace with the actual server code link
    },
    {
      title: "Tech Touch",
      description:
        "Tech Touch is a brand shop application where user can add and select brand based product to their cart after login.",
      imageUrl: "/images/techtouch.png", // Replace with the actual path to your image
      liveLink: "#", // Replace with the actual live link
      clientCodeLink: "#", // Replace with the actual client code link
      serverCodeLink: "#", // Replace with the actual server code link
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
