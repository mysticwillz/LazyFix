import React from "react";
import "./product-card.css";
export default function ProductCard() {
  return (
    <main id="product--card--main">
      <section className=" product--card--section ">
        <div className="product--card--first--div  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzWJ2DrsJ56L1obaqglAIoKjy6sKI0x1t8g&usqp=CAU"
            alt="product "
          />
        </div>
        <h3>Iphone 70 trOmetic</h3>
        <div className=" product--card--second--div  flex  justify-between items-center w-full  mb-2  ">
          <h2>$ 800</h2>
          <p>$ 600</p>
        </div>
        <p className=" product--card--para ">
          sold by
          <span>Willys Wonderland</span>
        </p>
        <button type="button">Add to cart</button>
      </section>
    </main>
  );
}
