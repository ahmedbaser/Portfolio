import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/your_instagram/" // Replace with your actual link
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/your_linkedin/" // Replace with your actual link
        className="home_social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/your_github" // Replace with your actual link
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
