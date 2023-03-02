import React from "react";
import "./links-middle.css";
export default function LinksMiddle() {
  return (
    <main id="link--middle--main">
      <header className="link--middle--header">
        <h2 className="link--middle--logo">
          Lazy<span>Fix</span>
        </h2>
        <nav>
          <ul className="link--middle--links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>
        </nav>
        <a href="#" className="link--middle--cta">
          <button>contact us</button>
        </a>
      </header>
    </main>
  );
}
