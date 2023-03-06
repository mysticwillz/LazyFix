import React from "react";
import "./flip-card.css";
export default function FlipCard() {
  return (
    <main id="flip--card--main">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="flip-card-title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="flip-card-title">BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>
    </main>
  );
}
