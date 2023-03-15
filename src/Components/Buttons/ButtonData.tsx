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
import { moveLeftCssCode, moveLeftHtmlCode } from "./MoveLeft/copyMoveLeft";
import { glowCssCode, glowHtmlCode } from "./Glow/copyGlow";
import { doubleCssCode, doubleHtmlCode } from "./Double/copyDouble";
import { glassCssCode, glassHtmlCode } from "./Glass/copyGlass";
import { shutterCssCode, shutterHtmlCode } from "./Shutter/shutterCopy";
import { windowCssCode, windowHtmlCode } from "./WindowClose/windowCopy";
import { shineCssCode, shineHtmlCode } from "./Shine/shineCopy";
import { slideCssCode, slideHtmlCode } from "./Slide/slideCopy";

interface ButtonType {
  title: string;
  button: JSX.Element;
  html: string;
  css: string;
}
export const ButtonData: ButtonType[] = [
  {
    title: " slide button effect",
    button: <Slide />,
    html: slideHtmlCode,
    css: slideCssCode,
  },
  {
    title: " Move Left Effect ",
    button: <MoveLeft />,
    html: moveLeftHtmlCode,
    css: moveLeftCssCode,
  },
  {
    title: "  Glow button effect ",
    button: <Glow />,
    html: glowHtmlCode,
    css: glowCssCode,
  },
  {
    title: " Shutter button effect",
    button: <Shutter />,
    html: shutterHtmlCode,
    css: shutterCssCode,
  },
  {
    title: " Window Close button effect ",
    button: <WindowClose />,
    html: windowHtmlCode,
    css: windowCssCode,
  },
  {
    title: " shine button effect",
    button: <Shine />,
    html: shineHtmlCode,
    css: shineCssCode,
  },
  {
    title: " Border button effect ",
    button: <Border />,
    html: borderHtmlCode,
    css: borderCssCode,
  },
  {
    title: " Double button effect ",
    button: <Double />,
    html: doubleHtmlCode,
    css: doubleCssCode,
  },
  {
    title: " Glass button effect ",
    button: <Glass />,
    html: glassHtmlCode,
    css: glassCssCode,
  },
];
