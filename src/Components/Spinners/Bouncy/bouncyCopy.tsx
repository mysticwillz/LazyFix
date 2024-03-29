export const bouncyHtmlCode: string = `     <main id="bouncy">
      <div class="bouncy--loader--circle">
        <span class="bouncy--span"></span>
        <span class="bouncy--span"></span>
        <span class="bouncy--span"></span>
      </div>
    </main> `;
export const bouncyCssCode: string = `#bouncy {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bouncy--center--body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /****** center box
	width: 300px;
	height: 300px;
	border: solid 1px #aaa;
	******/
}

.bouncy--loader--circle {
  display: inline-block;
  height: 70px;
  width: 70px;
  position: relative;
}
.bouncy--loader--circle .bouncy--span {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 10px solid transparent;
  display: inline-block;
  position: absolute;
}
.bouncy--loader--circle .bouncy--span:nth-child(1) {
  border-right-color: #ff9800;
  animation: loader-circle-39-clockwise 2s linear infinite;
}
.bouncy--loader--circle .bouncy--span:nth-child(2) {
  border-left-color: #ff9800;
  animation: loader-circle-39-antiClockwise 2s linear infinite;
}
.bouncy--loader--circle .bouncy--span:nth-child(3) {
  height: 16px;
  width: 16px;
  border: 0;
  background-color: #ff9800;
  top: 28px;
  left: 28px;
  animation: loader-circle-39-upDown 2s linear infinite;
}
@keyframes loader-circle-39-upDown {
  0% {
    transform: translate(0, 30px);
  }
  50% {
    transform: translate(0, -30px);
  }
  100% {
    transform: translate(0, 30px);
  }
}
@keyframes loader-circle-39-antiClockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes loader-circle-39-clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
