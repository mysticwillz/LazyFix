import React from "react";
import "./pink-contact-us.css";
export default function PinkContactUs() {
  return (
    <main id="pink--contact--us--main">
      <div className="contact-form">
        <span className="heading">Contact Us</span>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
