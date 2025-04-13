// File: src/components/home/Social.jsx

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
// import googleLogo from "../../assets/google-logo.svg.svg";
import "./home.css";

const Social = () => {
  return (
    <div className="home_social">
      {/* <a
        href="mailto:ahmedbaser529@gmail.com"
        className="home_social-icon google-icon" // Added 'google-icon' class
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={googleLogo}
          alt="Google"
          className="google-logo"
          style={{ width: "24px", height: "24px", display: "block" }} // Added display: 'block'
        />
      </a> */}

      <a
        href="mailto:ahmedbaser529@gmail.com"
        target="_blank"
        // className="home_social-icon"
        rel="noopener noreferrer"
        className="google-logo"
      >
        G
      </a>
      <a
        href="https://www.linkedin.com/in/baser-ahmed-shiplu-57ba0a1ba/" // Replace with your actual link
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/ahmedbaser" // Replace with your actual link
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default Social;
