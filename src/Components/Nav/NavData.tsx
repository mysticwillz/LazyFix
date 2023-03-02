import NewsLetter from "../Forms/NewsLetter/NewsLetter";
import LinksFirst from "./LinksFirst/LinksFirst";

interface NavType {
  title: string;
  nav: JSX.Element;
}
export const NavData: NavType[] = [
  {
    title: " Link first navigation",
    nav: <LinksFirst />,
  },
];
