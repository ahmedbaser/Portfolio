import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="mailto:ahmedbaser529@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="google-logo"
      >
        G
      </a>
      <a
        href="https://www.linkedin.com/in/baser-ahmed-shiplu-57ba0a1ba/"
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/ahmedbaser"
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
