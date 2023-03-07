import AppleCard from "../Cards/AppleCard/AppleCard";
import BluePagination from "./BluePagination/BluePagination";
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
];
