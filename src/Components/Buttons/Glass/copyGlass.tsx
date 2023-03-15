export const glassHtmlCode: string = `    <main id="main">
      <h4 class="heading">Hover to see effect</h4>
      <div>
        <button class="full-rounded">Hover me</button>
      </div>
    </main>`;
export const glassCssCode: string = `#main {
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
  aspect-ratio: 1;
}

.full-rounded {
  font-size: 16px;
  position: relative;
  margin: auto;
  padding: 1em 2.5em 1em 2.5em;
  border: none;
  background: #fff;
  transition: all 0.1s linear;
  box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
}

.full-rounded:hover {
  transform: scale(0.95);
  cursor: pointer;
}

.full-rounded {
  color: #bfbebe;
  background: #fff;
}

.full-rounded .border {
  position: absolute;
  border: 0.15em solid #fff;
  transition: all 0.3s 0.08s linear;
  top: 50%;
  left: 50%;
  width: 9em;
  height: 3em;
  transform: translate(-50%, -50%);
}

.full-rounded:hover .border {
  display: block;
  width: 9.9em;
  height: 3.7em;
}

.full-rounded {
  border-radius: 2em;
}
`;
