export const moveLeftHtmlCode: string = `    <main id="main">
    
      <div>
        <button type="button" class="move--left--button">
          Move Left
        </button>
      </div>
    </main>`;
export const moveLeftCssCode: string = `#main {
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

.move--left--button {
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
  background: #6c9fe2;
  cursor: pointer;
}
.move--left--button:hover {
  color: white;
  box-shadow: inset -10.5em 0 0 0 #202403;
}
`;
