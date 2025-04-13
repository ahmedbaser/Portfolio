import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaEnvelope, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l9pq565", // Replace with your EmailJS Service ID
        "template_cfr4zho", // Replace with your EmailJS Template ID
        form.current,
        "SOLoCjfXZjWwftBXH" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

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
        <p className="contact-heading">
          Fill in the form to start conversation
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
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
              name="user_email"
              placeholder="Insert your email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="project">Project</label>
            <textarea
              id="project"
              name="message"
              placeholder="Insert your message"
              className="form-textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send Message <span className="send-icon"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
