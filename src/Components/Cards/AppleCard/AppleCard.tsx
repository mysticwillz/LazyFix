import React from "react";
import "./apple-card.css";
export default function AppleCard() {
  return (
    <main id="apple--card--main">
      <div className="store-card">
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
          alt=""
          className="shop-img"
        />
        <div className="shop-name ">Apple</div>
        <p>para graph is not a goof way to stay life so whatw </p>

        <div className="shop-now apple ">
          {" "}
          <p>shop now </p>{" "}
        </div>
      </div>
    </main>
  );
}
