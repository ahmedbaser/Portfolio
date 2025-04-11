import React from "react";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h2>Talk to me</h2>
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope className="icon" />
            <p className="label">Email</p>
            <p className="value">ahmedbaser529@gmail.com</p>
            <a
              href="mailto:ahmedbaser529@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="action"
            >
              Write me →
            </a>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <h2>Write me about project</h2>
        <form data-vercel-form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Insert your name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insert your email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project">Project</label>
            <textarea
              id="project"
              name="project"
              placeholder="Insert your message"
              className="form-textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button">
            Send Message <span className="send-icon"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
