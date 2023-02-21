import React from "react";
import "./move-left.css";
function MoveLeft() {
  return (
    <main id="main">
      <h4 className="heading">Hover to see effect</h4>
      <div>
        <button type="button" className="move--left--button">
          Move Left
        </button>
      </div>
    </main>
  );
}

export default MoveLeft;
