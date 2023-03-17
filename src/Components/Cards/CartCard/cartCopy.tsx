export const cartHtmlCode: string = `     <main id="cart--card--main">
      <div class="card">
        <div class="image">
          <span class="text">This is a Table.</span>
        </div>
        <h2 class="cart--card--title">Cool Table</h2>
        <span class="cart--card--price">$100</span>
      </div>
    </main>`;
export const cartCssCode: string = `#cart--card--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
    width: 11.875em;
    height: 16.5em;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 120ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 0.5em;
    padding-bottom: 3.4em;
    position: relative;
  }

.cart--card--title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  position: absolute;
  left: 0.625em;
  bottom: 1.875em;
  font-weight: 400;
}

.cart--card--price {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 0.9em;
  position: absolute;
  left: 0.625em;
  bottom: 0.625em;
}

.text {
  max-width: 55px;
}

.image {
  background: rgb(241, 241, 241);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

`;
