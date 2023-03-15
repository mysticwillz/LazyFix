export const circleHtmlCode: string = `   <main id="circle--load">
      <div class="circle--load--spinner">
        <div class="circle-spin"> </div>
        <div class="circle-spin"> </div>
      </div>
    </main> `;
export const circleCssCode: string = `#circle--load {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle--load--spinner {
  display: inline-block;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: bottom center;
  animation: circle-spin 3s linear infinite;
}

.circle-spin {
  background-color: rgb(54, 4, 54);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: circle-spin-grow 1.5s linear infinite;
  transform: scale(0);
  margin: -10px;
}
.circle-spin:nth-child(2) {
  background-color: rgb(246, 151, 246);
  animation-delay: 0.75s;
}

@keyframes circle-spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes circle-spin-grow {
  50% {
    transform: scale(1);
  }
}
`;
