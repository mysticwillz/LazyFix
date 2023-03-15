export const doubleHtmlCode: string = `     <main id="main">
 
      <div>
        <button type="button" class="double--button">
          Move Left
        </button>
      </div>
    </main>`;
export const doubleCssCode: string = `#main {
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

.double--button {
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
  background: #64662c;
  cursor: pointer;
  color: aliceblue;
  border-radius: 5px;
}
.double--button:hover {
  box-shadow: 10px 10px 0px #c3c66e;
  top: -5px;
  left: -5px;
}
`;
