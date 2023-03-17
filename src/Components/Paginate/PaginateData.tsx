import AppleCard from "../Cards/AppleCard/AppleCard";
import { activeCssCode, activeHtmlCode } from "./ActivePagination/activeCopy";
import ActivePagination from "./ActivePagination/ActivePagination";
import { allroundCssCode, allroundHtmlCode } from "./AllRound/allroundCopy";
import AllRoundPagination from "./AllRound/AllRoundPagination";
import { blueCssCode, blueHtmlCode } from "./BluePagination/blueCopy";
import BluePagination from "./BluePagination/BluePagination";
import { roundedCssCode, roundedHtmlCode } from "./Rounded/roundedCopy";
import RoundedPagination from "./Rounded/RoundedPagination";
import { simpleCssCode, simpleHtmlCode } from "./SimplePagination/simpleCopy";
import SimplePagination from "./SimplePagination/SimplePagination";

interface PageType {
  title: string;
  pagination: JSX.Element;
  html: string;
  css: string;
}
export const PaginateData: PageType[] = [
  {
    title: "Blue pagination",
    pagination: <BluePagination />,
    html: blueHtmlCode,
    css: blueCssCode,
  },
  {
    title: "Simple pagination",
    pagination: <SimplePagination />,
    html: simpleHtmlCode,
    css: simpleCssCode,
  },
  {
    title: "Active and Hoverable Pagination",
    pagination: <ActivePagination />,
    html: activeHtmlCode,
    css: activeCssCode,
  },
  {
    title: "Rounded corner pagination",
    pagination: <RoundedPagination />,
    html: roundedHtmlCode,
    css: roundedCssCode,
  },
  {
    title: "All round pagination",
    pagination: <AllRoundPagination />,
    html: allroundHtmlCode,
    css: allroundCssCode,
  },
];
