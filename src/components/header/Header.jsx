import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="row">
      <div className="logo">
        <div className="logo-initial-container">
          <span className="logo-initial">B</span>
        </div>
        <span className="logo-name">aser Ahmed</span>
      </div>
      <nav className={isNavOpen ? "open" : ""}>
        <ul className="nav-links">
          <li>
            <a href="#home" className="active" onClick={closeNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeNav}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeNav}>
              Project
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeNav}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Hamburger menu */}
      <div
        className={`hamburger ${isNavOpen ? "open" : ""}`}
        onClick={toggleNav}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
