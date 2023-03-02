import LinksFirst from "./LinksFirst/LinksFirst";
import LinksLast from "./LinksLast/LinksLast";
import LinksMiddle from "./LinksMiddle/LinksMiddle";

interface NavType {
  title: string;
  nav: JSX.Element;
}
export const NavData: NavType[] = [
  {
    title: " Links Middle navigation",
    nav: <LinksMiddle />,
  },
  {
    title: " Links last navigation",
    nav: <LinksLast />,
  },
  {
    title: " Links first navigation",
    nav: <LinksFirst />,
  },
];
