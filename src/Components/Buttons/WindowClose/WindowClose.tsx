import React from "react";
import "./window.css";
function WindowClose() {
  return (
    <main id="main">
      <h4 className="heading">Hover to see effect</h4>
      <div>
        <button type="button" className="window--button">
          Close the window
        </button>
      </div>
    </main>
  );
}

export default WindowClose;
