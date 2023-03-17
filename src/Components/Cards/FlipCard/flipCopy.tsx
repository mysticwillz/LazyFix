export const flipHtmlCode: string = `  <main id="flip--card--main">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="flip-card-title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
          <div class="flip-card-back">
            <p class="flip-card-title">BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>
    </main>`;
export const flipCssCode: string = `#flip--card--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip-card {
  background-color: transparent;
  width: 190px;
  height: 230px;
  perspective: 1000px;
  font-family: sans-serif;
}

.flip-card-title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    bisque 60%,
    rgb(255, 231, 222) 88%,
    rgb(255, 211, 195) 40%,
    rgba(186, 87, 51, 0.603) 48%
  );
  color: coral;
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(255, 174, 145) 30%,
    coral 88%,
    bisque 40%,
    rgb(125, 231, 219) 78%
  );
  color: white;
  transform: rotateY(180deg);
}

@media (min-width: 768px) {
  .flip-card {
    background-color: transparent;
    width: 190px;
    height: 256px;
    perspective: 1000px;
    font-family: sans-serif;
  }
}
`;
