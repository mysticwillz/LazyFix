export const thickTextHtmlCode: string = `     <main id="thick--shade">
      <div class="thick--center--body">
        <div class="thick--loader--circle"></div>
      </div>
    </main>`;
export const thickTextCssCode: string = `#thick--shade {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thick--center--body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: black;
}

.thick--loader--circle {
  overflow: hidden;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(to right, #fff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: load3 1.4s infinite linear;
  display: inline-block;
}

.thick--loader--circle:after {
  background: #910505;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
