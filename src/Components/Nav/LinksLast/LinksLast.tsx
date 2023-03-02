import React from "react";
import "./links-last.css";
export default function LinksLast() {
  return (
    <main id="link--last--main">
      <header className="link--last--header">
        <h2 className="link--last--logo">
          Lazy<span>Fix</span>
        </h2>

        <nav className="link--last--nav">
          <ul className="link--last--links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>
          <a href="#" className="link--last--cta">
            <button>contact us</button>
          </a>
        </nav>
      </header>
    </main>
  );
}
