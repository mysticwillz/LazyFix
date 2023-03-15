export const stringTextHtmlCode: string = `     <main id="string--spin">
      <div class="string--spinner--wrapper">
        <div class="string--spinner"></div>
      </div>
    </main>`;
export const stringTextCssCode: string = `#string--spin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.string--spinner--wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.string--spinner {
  position: absolute;
  height: 60px;
  width: 60px;
  border: 3px solid transparent;
  top: 50%;
  left: 50%;
  border-top-color: rgb(249, 36, 132);
  margin: -30px;
  border-radius: 50%;
  animation: string--spinner 1.7s linear infinite;
}

.string--spinner::before,
.string--spinner::after {
  content: "";
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
}

.string--spinner::before {
  border-top-color: blue;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  animation: string--spinner 2.7s linear infinite;
}

.string--spinner::after {
  border-top-color: rgb(150, 110, 18);
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  animation: string--spinner 3.7s linear infinite;
}

@keyframes string--spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
