import React from "react";
import "./shutter.css";
function Shutter() {
  return (
    <main id="main">
      <h4 className="heading">Hover to see effect</h4>
      <div>
        <button type="button" className="shutter--button">
          Shut The Door
        </button>
      </div>
    </main>
  );
}

export default Shutter;
