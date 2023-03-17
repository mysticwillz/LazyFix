export const productHtmlCode: string = `     <main id="product--card--main">
      <section class=" product--card--section ">
        <div class="product--card--first--div  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzWJ2DrsJ56L1obaqglAIoKjy6sKI0x1t8g&usqp=CAU"
            alt="product "
          />
        </div>
        <h3>Iphone 70 trOmetic</h3>
        <div class=" product--card--second--div  flex  justify-between items-center w-full  mb-2  ">
          <h2>$ 800</h2>
          <p>$ 600</p>
        </div>
        <p class=" product--card--para ">
          sold by
          <span>Willys Wonderland</span>
        </p>
        <button type="button">Add to cart</button>
      </section>
    </main>`;
export const productCssCode: string = `#product--card--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  .product--card--section {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 330px;
    border: 1px solid gray;
    padding: 16px;
    cursor: pointer;
    border-radius: 10px;
  }
.product--card--first--div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 170px;
    margin-bottom: 8px;
  }

.product--card--first--div img {
  width: 100%;
  height: 100%;
}
.product--card--section h3 {
  margin-bottom: 8px;
  color: #1f2d38;
  text-transform: capitalize;
  font-size: 22px;
}
.product--card--second--div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 8px;
}

.product--card--second--div h2 {
  font-size: 20px;
  font-weight: bold;
  color: #1f2d38;
}
.product--card--second--div p {
  font-size: 17px;
  font-weight: bold;
  color: #767879db;
  text-decoration: line-through;
}
  .product--card--para {
    margin-bottom: 8px;
    font-size: 12px;
    color: #1f2d38;
  }

.product--card--para span {
  margin-left: 4px;
  font-size: 12px;
  color: #1e6091;
}
.product--card--section button {
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #1e6091;
  color: #1e6091;
  background-color: #fff;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
}
.product--card--section button:hover {
  color: white;
  background-color: #1e6091;
}


`;
