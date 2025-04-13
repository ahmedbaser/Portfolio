// File: src/components/project/Project.jsx

import React from "react";
import ProjectCard from "./ProjectCard";
import bikeImage from "../../images/BikeNew.png";
import petCare from "../../images/petCare.png";
import sportImage from "../../images/sports.png";
import "./project.css";

const Project = () => {
  const projectsData = [
    {
      title: "Bike Rental System",
      description:
        "A user-friendly bike rental platform with secure login, role-based access, and admin controls. Users can browse, book, manage rentals, and payments, while admins handle bikes, users, and bookings through a structured system.",
      imageUrl: bikeImage,
      liveLink:
        "https://bike-rental-reservation-system-frontend-eosin.vercel.app/",
      clientCodeLink:
        "https://github.com/ahmedbaser/Bike-Rental-Reservation-System-Frontend",
      serverCodeLink:
        "https://github.com/ahmedbaser/Bike-Rental-Reservation-System-Backend",
    },
    {
      title: "Pet Care & Stories",
      description:
        "A responsive  social media platform for pet enthusiasts featuring user authentication, post management, Stripe-integrated premium content, AI chatbot (OpenAI) for pet care advice, and admin controls for managing users, posts, and premium services.",
      imageUrl: petCare,
      liveLink: "https://pet-care-app-frontend.vercel.app/",
      clientCodeLink: "https://github.com/ahmedbaser/pet-care-app-frontend",
      serverCodeLink:
        "https://github.com/ahmedbaser/Pet-Care-Tips-Stories-Backend",
    },
    {
      title: "E-Commerce Sporting Website",
      description:
        " A responsive sporting goods e-commerce site enabling users to browse, add to cart, and pay securely. Enjoy a dynamic, responsive UI with real-time feedback, while admins effortlessly manage products and updates.",
      imageUrl: sportImage,
      liveLink: "https://assignment-4-frontend.vercel.app/",
      clientCodeLink: "https://github.com/ahmedbaser/assignment-4-frontend",
      serverCodeLink: "https://github.com/ahmedbaser/assignment-4-backend",
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
