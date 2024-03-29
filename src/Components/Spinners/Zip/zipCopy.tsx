export const zipTextHtmlCode: string = `    <main id="zip">
      <div className="zip--center--body">
        <div className="zip--loader--circle"></div>
      </div>
    </main>`;
export const zipTextCssCode: string = `#zip {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zip--center--body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #202628;
}

.zip--loader--circle {
  height: 50px;
  position: relative;
  width: 50px;
  z-index: 2;
  background-color: #fff;
  border-radius: 50px;
}
.zip--loader--circle::before {
  position: absolute;
  content: "";
  width: 100%;
  bottom: 30px;
  z-index: 1;
  height: 100%;
  transform-origin: center bottom;
  clip-path: circle(50% at 50% 100%);
  background-color: #202628;
  animation: anm-CL-103-rotate 2s linear infinite;
}
.zip--loader--circle::after {
  position: absolute;
  content: "";
  width: 100%;
  top: 30px;
  z-index: 1;
  height: 100%;
  transform-origin: center top;
  clip-path: circle(50% at 50% 0);
  background-color: #202628;
  animation: anm-CL-103-rotate 2s linear infinite;
}
@keyframes anm-CL-103-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
`;
