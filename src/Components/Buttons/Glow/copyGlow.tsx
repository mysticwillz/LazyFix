export const glowHtmlCode: string = `      <main id="main">
      <h4 class="heading">Hover to see effect</h4>
      <div>
        <button type="button" class="glow--button">
          Keep Glowing
        </button>
      </div>
    </main>`;
export const glowCssCode: string = `#main {
  width: 100%;
  height: 100%;

  border-radius: 20px;
  position: relative;
}
.heading {
  position: absolute;
  color: rgb(2, 8, 22);
  right: 30px;

  font-size: 18px;
  top: 10px;
}

#main div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.glow--button {
  position: relative;
  border: none;
  transition: 0.3s ease-in;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 160px;
  height: 50px;
  background: #c7c6c7;
  cursor: pointer;
  border-radius: 10px;
}

.glow--button:hover {
  background: #ff96ad;
  box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad,
    0 0 500px #ff96ad;
}
`;
