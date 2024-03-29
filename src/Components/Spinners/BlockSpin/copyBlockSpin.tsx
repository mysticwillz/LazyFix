export const blockHtmlCode: string = `<main id="block">
      <div className="block--spin--spinner">
        <span class="span"> </span>
        <span class="span"> </span>
        <span class="span"> </span>
        <span class="span"> </span>
      </div>
    </main>`;
export const blockCssCode: string = `#block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
}

.block--spin--spinner {
  position: absolute;
  height: 40px;
  width: 40px;
  max-height: 40px;
  max-width: 40px;
  transform: rotate(45deg) translate3d(0, 0, 0);
  animation: animate 1.2s ease-in-out infinite;
}

@keyframes animate {
  0%,
  10%,
  100% {
    max-height: 40px;
    max-width: 40px;
    height: 40px;
    width: 40px;
  }
  65% {
    max-height: 70px;
    max-width: 70px;
    height: 70px;
    width: 70px;
  }
}

.span {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  background-color: rgb(255, 0, 0);
  animation: rotate 1.2s linear both infinite;
}

@keyframes rotate {
  0%,
  30%,
  100% {
    transform: rotate(0);
  }
  65% {
    transform: rotate(-40deg);
  }
}

.span:nth-child(1) {
  top: 0;
  left: 0;
  background-color: rgb(38, 207, 162);
}
.span:nth-child(2) {
  top: 0;
  right: 0;

  background-color: rgb(78, 123, 221);
}
.span:nth-child(3) {
  bottom: 0;
  left: 0;
  background-color: rgb(133, 12, 137);
}
.span:nth-child(4) {
  right: 0;
  bottom: 0;

  background-color: rgb(72, 134, 7);
}
`;
