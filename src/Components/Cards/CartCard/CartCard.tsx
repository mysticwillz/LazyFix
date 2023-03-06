import React from "react";

import "./cart-card.css";
export default function CartCard() {
  return (
    <main id="cart--card--main">
      <div className="card">
        <div className="image">
          <span className="text">This is a Table.</span>
        </div>
        <h2 className="cart--card--title">Cool Table</h2>
        <span className="cart--card--price">$100</span>
      </div>
    </main>
  );
}
