export const shutterHtmlCode: string = `  <main id="main">
     
      <div>
        <button type="button" class="shutter--button">
          Shut The Door
        </button>
      </div>
    </main>`;
export const shutterCssCode: string = `#main {
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

.shutter--button {
  position: relative;
  border: none;
  transition: 0.4s ease-in;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 200px;
  height: 50px;
  background: #b2eded;
  cursor: pointer;
  border-radius: 10px;
}

.shutter--button:hover {
  box-shadow: inset -10.5em 0 0 0 #0e4159, inset 10.5em 0 0 0 #0e4159;
  color: aliceblue;
}
`;
