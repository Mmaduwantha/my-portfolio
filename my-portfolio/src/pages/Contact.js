import React from "react";
import Navbar from "../components/Navbar";

function Contact(){
    return (
        <div>
            <Navbar />
            <div className="contact-container">
            <h1>Contact<span>Me</span></h1>
            <form className="contact-form">
                <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-row">
                <input type="tel" placeholder="Mobile Number" required />
                <input type="text" placeholder="Email Subject" required />
                </div>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            </div>
        </div>
      );
}

export default Contact;