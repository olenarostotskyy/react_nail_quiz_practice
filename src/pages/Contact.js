import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ba0sv1p",
        "template_xjw6tgg",
        e.target,
        "7UxVUKKnknQ4qhKC9"
        // "MFFbauTFlVTssTeOJZEY-"
      )

      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    // console.log("test contact us");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact us</h2>
        <form onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="text" name="user_email" />
          <label>Message</label>
          <textarea name="message" rows="4" />
          <button className="contact-button" type="submit" value="send">
            Send email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
