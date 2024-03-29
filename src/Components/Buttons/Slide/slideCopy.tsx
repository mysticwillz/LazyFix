export const slideHtmlCode: string = `    <main id="main">
      
      <div>
        <button type="button" class="slide--button">
          Swipe Next
          <span>
            <GrFormNextLink class="icon" />
          </span>
        </button>
      </div>
    </main>`;
export const slideCssCode: string = `#main {
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
  width: 100%;
  height: 100%;
}

.slide--button {
  position: relative;
  width: 200px;
  height: 60px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  text-decoration: none;
  border-top: 0.5px solid rgba(255, 255, 255, 0.35);
  border-top: 0.5px solid rgba(255, 255, 255, 0.35);
  border-radius: 60px;
  padding-left: 40px;
  transition: 0.5s;
  cursor: pointer;
  background: #28272a;
}

.slide--button:hover {
  padding-left: 0px;
  padding-right: 40px;
  color: rgba(255, 255, 255, 1);
}

.slide--button span {
  position: absolute;
  left: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  transition: 0.5s ease-in-out;
}

.slide--button:hover span {
  left: calc(100% - 55px);
}
.icon {
  color: #28272a;
  font-size: 2.5em;
}
`;
