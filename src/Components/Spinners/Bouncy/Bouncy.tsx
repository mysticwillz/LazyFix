import React from "react";
import "./bouncy.css";

function Bouncy() {
  return (
    <main id="bouncy">
      <div className="bouncy--loader--circle">
        <span className="bouncy--span"></span>
        <span className="bouncy--span"></span>
        <span className="bouncy--span"></span>
      </div>
    </main>
  );
}

export default Bouncy;
