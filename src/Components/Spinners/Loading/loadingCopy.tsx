export const loadingHtmlCode: string = `   <main id="main">
      <div class="center">
        <div class="loading--spinner">
          <span class="loading--span">loading..</span>
        </div>
      </div>
    </main>`;
export const loadingCssCode: string = `#main {
  width: 100%;
  height: 100%;

  border-radius: 20px;
  position: relative;
}

.center {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading--spinner {
  position: absolute;
  max-width: 150px;
  max-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  border-radius: 50%;
}

.loading--spinner::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  animation: spinner 2s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 3px 2px #e65c00;
  }
  50% {
    transform: rotate(180deg);
    box-shadow: 1px 3px 2px #18b201;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 1px 3px 2px #0466c8;
  }
}
.loading--span {
  color: #737373;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 150px;
  position: absolute;
  transform: rotate(0deg);
  animation: text 3s ease-in-out infinite;
}

@keyframes text {
  50% {
    color: transparent;
  }
}
`;
