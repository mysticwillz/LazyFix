export const whoopTextHtmlCode: string = ` <main id="whoop">
      <div class="whoop--spinner">
        <div class="ring"> </div>
        <div class="ring"> </div>
        <div class="ring"> </div>
        <span class="whoop--span">loading...</span>
      </div>
    </main>`;
export const whoopTextCssCode: string = `#whoop {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whoop--spinner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ring {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  max-height: 200px;
  max-width: 200px;
  border: 4px solid transparent;
  position: absolute;
}

.ring:nth-child(1) {
  border-bottom-width: 8px;
  border-bottom-color: rgb(20, 162, 151);
  animation: rotate1 2s linear infinite;
}
.ring:nth-child(2) {
  border-right-width: 8px;
  border-bottom-color: rgb(162, 20, 70);
  animation: rotate2 2s linear infinite;
}
.ring:nth-child(3) {
  border-top-width: 8px;
  border-bottom-color: rgb(119, 126, 32);
  animation: rotate3 2s linear infinite;
}
.whoop--span {
  color: #323030;
  font-size: 16px;

  letter-spacing: 1px;
  line-height: 150px;
  position: absolute;

  animation: text 3s ease-in-out infinite;
}

@keyframes text {
  50% {
    color: transparent;
  }
}

@keyframes rotate1 {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotate(360deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotate(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotate(360deg);
  }
}
@keyframes rotate3 {
  0% {
    transform: rotateX(54deg) rotateY(50deg) rotate(0deg);
  }
  100% {
    transform: rotateX(54deg) rotateY(50deg) rotate(360deg);
  }
}
`;
