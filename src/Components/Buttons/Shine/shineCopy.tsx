export const shineHtmlCode: string = `        <main id="main">
      
      <div>
        <button type="button" className="shine--button">
          Shine
        </button>
      </div>
    </main>`;
export const shineCssCode: string = `#main {
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

.shine--button {
  position: relative;
  border: none;
  transition: 0.6s ease-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 160px;
  height: 50px;
  background: #c5d2e1;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
}
.shine--button::after {
  position: absolute;
  content: "";
  z-index: -1;
  height: 100%;
  left: -35%;
  top: 0%;
  transform: skew(50deg);
  transition-duration: 0.6s;
  transform-origin: top left;
  width: 0;
  background: #82a3c8;
}

.shine--button:hover:after {
  height: 100%;
  width: 135%;
}
`;
