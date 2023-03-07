import AppleCard from "../Cards/AppleCard/AppleCard";
import ActivePagination from "./ActivePagination/ActivePagination";
import BluePagination from "./BluePagination/BluePagination";
import RoundedPagination from "./Rounded/RoundedPagination";
import SimplePagination from "./SimplePagination/SimplePagination";

interface PageType {
  title: string;
  pagination: JSX.Element;
}
export const PaginateData: PageType[] = [
  {
    title: "Blue pagination",
    pagination: <BluePagination />,
  },
  {
    title: "Simple pagination",
    pagination: <SimplePagination />,
  },
  {
    title: "Active and Hoverable Pagination",
    pagination: <ActivePagination />,
  },
  {
    title: "Rounded corner pagination",
    pagination: <RoundedPagination />,
  },
];
