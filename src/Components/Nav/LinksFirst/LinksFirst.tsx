import React from "react";
import "./link-first.css";
export default function LinksFirst() {
  return (
    <main id="link--first--main">
      <header className="link--first--header">
        <nav className="link--first--nav">
          <ul className="link--first--links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>
          <a href="#" className="link--first--cta">
            <button>contact us</button>
          </a>
        </nav>
        <h2 className="link--first--logo">
          Lazy<span>Fix</span>
        </h2>
      </header>
    </main>
  );
}
