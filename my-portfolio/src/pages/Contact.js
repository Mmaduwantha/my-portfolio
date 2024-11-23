import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        setStatusMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>
          Contact<span>Me</span>
        </h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;
