import React from "react";
import "./whoop.css";
function Whoop() {
  return (
    <main id="whoop">
      <div className="whoop--spinner">
        <div className="ring"> </div>
        <div className="ring"> </div>
        <div className="ring"> </div>
        <span className="whoop--span">loading...</span>
      </div>
    </main>
  );
}

export default Whoop;
