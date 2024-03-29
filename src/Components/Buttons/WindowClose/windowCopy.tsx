export const windowHtmlCode: string = `    <main id="main">
      
      <div>
        <button type="button" class="window--button">
          Close the window
        </button>
      </div>
    </main>`;
export const windowCssCode: string = `#main {
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

.window--button {
  position: relative;
  border: none;
  transition: 0.4s ease-in;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 180px;
  height: 55px;
  background: #c7c7c7;
  cursor: pointer;
  border-radius: 5px;
}
.window--button:hover {
  color: white;
}

.window--button::after {
  position: absolute;
  content: "";
  z-index: -1;
  height: 0%;
  left: 0%;
  top: 0%;
  transition: 0.6s;
  width: 100%;
  background: #7a13ae;
  border-radius: 5px;
}

.window--button:hover::after {
  height: 100%;
}
`;
