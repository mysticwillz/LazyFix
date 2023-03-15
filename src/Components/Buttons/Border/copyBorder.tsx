export const borderHtmlCode: string = `    <main id="main">
   
      <div>
        <button type="button" class="border--button">
          Show The Border
        </button>
      </div>
    </main>`;
export const borderCssCode: string = ` #main {
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

.border--button {
  position: relative;
  border: none;
  transition: 0.6s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 180px;
  height: 50px;
  background: #114989;
  color: aliceblue;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
}
.border--button:hover {
  border: 1px solid #114989;
  background-color: transparent;
  color: black;
}
`;
