import React from "react";
import "./radius-signup.css";
export default function RadiusSignup() {
  return (
    <main id="radius--signup--main">
      <form className="radius--signup--form">
        <p className="radius--signup--heading">Login</p>
        <input
          className="radius--signup--input"
          placeholder="Username"
          type="text"
        />
        <input
          className="radius--signup--input"
          placeholder="Password"
          type="text"
        />
        <button className="radius--signup--btn">Submit</button>
      </form>
    </main>
  );
}
