import React from "react";
import "./slide.css";
import { GrFormNextLink } from "react-icons/gr";

function Slide() {
  return (
    <main id="main">
      <h4 className="heading">Hover to see effect</h4>
      <div>
        <button type="button" className="slide--button">
          Swipe Next
          <span>
            <GrFormNextLink className="icon" />
          </span>
        </button>
      </div>
    </main>
  );
}

export default Slide;
