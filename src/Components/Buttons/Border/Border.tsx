import React from "react";
import "./border.css";
function Border() {
  return (
    <main id="main">
      <h4 className="heading">Hover to see effect</h4>
      <div>
        <button type="button" className="border--button">
          Show The Border
        </button>
      </div>
    </main>
  );
}

export default Border;
