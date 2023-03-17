import { firstCssCode, firstHtmlCode } from "./LinksFirst/firstCopy";
import LinksFirst from "./LinksFirst/LinksFirst";
import { lastCssCode, lastHtmlCode } from "./LinksLast/lastCopy";
import LinksLast from "./LinksLast/LinksLast";
import LinksMiddle from "./LinksMiddle/LinksMiddle";
import { middleCssCode, middleHtmlCode } from "./LinksMiddle/middleCopy";

interface NavType {
  title: string;
  nav: JSX.Element;
  html: string;
  css: string;
}
export const NavData: NavType[] = [
  {
    title: " Links Middle navigation",
    nav: <LinksMiddle />,
    html: middleHtmlCode,
    css: middleCssCode,
  },
  {
    title: " Links last navigation",
    nav: <LinksLast />,
    html: lastHtmlCode,
    css: lastCssCode,
  },
  {
    title: " Links first navigation",
    nav: <LinksFirst />,
    html: firstHtmlCode,
    css: firstCssCode,
  },
];
