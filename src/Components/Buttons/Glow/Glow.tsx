import React from "react";
import "./glow.css";
function Glow() {
  return (
    <main id="main">
      <h4 className="heading">Hover to see effect</h4>
      <div>
        <button type="button" className="glow--button">
          Keep Glowing
        </button>
      </div>
    </main>
  );
}

export default Glow;
