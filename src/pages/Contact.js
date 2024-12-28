import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Send email and reset form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sikowjd", "template_lhywob1", form.current, {
        publicKey: "Q1KuEWV5ff3sZjg3O",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset form fields after success
          setFormData({
            name: "",
            email: "",
            mobile: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>
          Contact<span>Me</span>
        </h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
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
      </div>
    </div>
  );
}

export default Contact;
