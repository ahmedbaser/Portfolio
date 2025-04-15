import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="mailto:ahmedbaser529@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          G
        </a>
        <a
          href="https://www.linkedin.com/in/baser-ahmed-shiplu-57ba0a1ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </a>
        <a
          href="https://github.com/ahmedbaser"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>{" "}
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by Baser
          Ahmed Shiplu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
