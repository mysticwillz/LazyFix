import LinksFirst from "./LinksFirst/LinksFirst";
import LinksLast from "./LinksLast/LinksLast";

interface NavType {
  title: string;
  nav: JSX.Element;
}
export const NavData: NavType[] = [
  {
    title: " Links first navigation",
    nav: <LinksFirst />,
  },
  {
    title: " Links last navigation",
    nav: <LinksLast />,
  },
];
