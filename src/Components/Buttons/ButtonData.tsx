import Border from "./Border/Border";
import Double from "./Double/Double";
import Glow from "./Glow/Glow";
import MoveLeft from "./MoveLeft/MoveLeft";
import Glass from "./Glass/Glass";

import Shine from "./Shine/Shine";
import Shutter from "./Shutter/Shutter";
import Slide from "./Slide/Slide";
import WindowClose from "./WindowClose/WindowClose";

interface ButtonType {
  title: string;
  button: JSX.Element;
  html?: string;
  css?: string;
}
export const ButtonData: ButtonType[] = [
  {
    title: " slide button effect",
    button: <Slide />,
    html: `  <main id="cart--card--main">
      <div className="card">
        <div className="image">
          <span className="text">This is a Table.</span>
        </div>
        <h2 className="cart--card--title">Cool Table</h2>
        <span className="cart--card--price">$100</span>
      </div>
    </main> `,
    css: ` #cart--card--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 11.875em;
  height: 10.5em;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 120ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0.5em;
  padding-bottom: 3.4em;
  position: relative;
}

.cart--card--title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  position: absolute;
  left: 0.625em;
  bottom: 1.875em;
  font-weight: 400;
}

.cart--card--price {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 0.9em;
  position: absolute;
  left: 0.625em;
  bottom: 0.625em;
}

.text {
  max-width: 55px;
}

.image {
  background: rgb(241, 241, 241);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
@media (min-width: 768px) {
  .card {
    width: 11.875em;
    height: 16.5em;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 120ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 0.5em;
    padding-bottom: 3.4em;
    position: relative;
  }
} 
`,
  },
  // {
  //   title: " Move Left Effect ",
  //   button: <MoveLeft />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
  // {
  //   title: "  Glow button effect ",
  //   button: <Glow />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
  // {
  //   title: " Shutter button effect",
  //   button: <Shutter />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
  // {
  //   title: " Window Close button effect ",
  //   button: <WindowClose />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
  // {
  //   title: " shine button effect",
  //   button: <Shine />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
  // {
  //   title: " Border button effect ",
  //   button: <Border />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
  // {
  //   title: " Double button effect ",
  //   button: <Double />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
  // {
  //   title: " Glass button effect ",
  //   button: <Glass />,
  //   html: <Slide />,
  //   css: <Slide />,
  // },
];
