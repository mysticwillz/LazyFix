import Border from "./Border/Border";
import Double from "./Double/Double";
import Glow from "./Glow/Glow";
import MoveLeft from "./MoveLeft/MoveLeft";
import Glass from "./Glass/Glass";

import Shine from "./Shine/Shine";
import Shutter from "./Shutter/Shutter";
import Slide from "./Slide/Slide";
import WindowClose from "./WindowClose/WindowClose";
import { borderCssCode, borderHtmlCode } from "./Border/copyBorder";

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
    html: borderHtmlCode,
    css: borderCssCode,
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
  {
    title: " Border button effect ",
    button: <Border />,
    html: borderHtmlCode,
    css: borderCssCode,
  },
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
