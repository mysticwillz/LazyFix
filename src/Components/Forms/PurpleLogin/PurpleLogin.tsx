import React from "react";
import "./purple-login.css";
export default function PurpleLogin() {
  return (
    <main id="purple--login--main">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
            />
            <button>Log in</button>
          </form>
        </div>

        <div className="register">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </main>
  );
}
