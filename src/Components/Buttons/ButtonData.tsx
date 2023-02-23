import Border from "./Border/Border";
import Double from "./Double/Double";
import Glow from "./Glow/Glow";
import MoveLeft from "./MoveLeft/MoveLeft";
import Outline from "./Outline/Outline";
import Shine from "./Shine/Shine";
import Shutter from "./Shutter/Shutter";
import Slide from "./Slide/Slide";
import WindowClose from "./WindowClose/WindowClose";

interface ButtonType {
  title: string;
  button: JSX.Element;
}
export const ButtonData: ButtonType[] = [
  {
    title: " slide button effect",
    button: <Slide />,
  },
  {
    title: " Move Left Effect ",
    button: <MoveLeft />,
  },
  {
    title: "  Glow button effect ",
    button: <Glow />,
  },
  {
    title: " Shutter button effect",
    button: <Shutter />,
  },
  {
    title: " Window Close button effect ",
    button: <WindowClose />,
  },
  {
    title: " shine button effect",
    button: <Shine />,
  },
  {
    title: " Border button effect ",
    button: <Border />,
  },
  {
    title: " Double button effect ",
    button: <Double />,
  },
  {
    title: " Outline button effect ",
    button: <Outline />,
  },
];
