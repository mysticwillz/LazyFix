export const appleHtmlCode: string = `   <main id="apple--card--main">
      <div class="store-card">
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png"
          alt=""
          class="shop-img"
        />
        <div class="shop-name ">Apple</div>
        <p>para graph is not a goof way to stay life so whatw </p>

        <div class="shop-now apple ">
          {" "}
          <p>shop now </p>{" "}
        </div>
      </div>
    </main>`;
export const appleCssCode: string = `
    #apple--card--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .store-card {
    background-color: #eff1ed;
    max-width: 250px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    text-align: center;
    transition: all 0.5s ease;
    box-shadow: 2px 2px 4px 0px #0e7797, -2px -2px 4px 0px #0e7797;
  }
.store-card:hover {
  transform: translateY(-10px);
}
  .shop-img {
    width: 180px;
    height: 200px;
  }

.shop-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 8px 0 4px 0;
  color: #0e7797;
}

.store-card p {
  text-align: center;
  font-size: 0.9rem;
  padding: 0 15px;
  color: #0e7797;
}

.shop-now {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.shop-now p {
  text-decoration: none;
  color: #fafafa;
  font-size: 20px;
  text-transform: capitalize;
}

.apple {
  background-color: rgb(15, 15, 63);
}



`;
