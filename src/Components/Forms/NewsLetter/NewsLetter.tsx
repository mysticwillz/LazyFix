import React from "react";
import "./newsletter.css";
export default function NewsLetter() {
  return (
    <main id="newsletter--main">
      <div className="newsletter--subscribe ">
        <p>SUBSCRIBE</p>
        <input
          type="email"
          name="email"
          className="subscribe-input"
          placeholder="Your e-mail"
        />
        <br />
        <div className="newsletter--submit--btn">SUBMIT</div>
      </div>
    </main>
  );
}
