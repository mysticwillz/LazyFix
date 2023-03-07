import AppleCard from "../Cards/AppleCard/AppleCard";
import BluePagination from "./BluePagination/BluePagination";

interface PageType {
  title: string;
  card: JSX.Element;
}
export const PaginateData: PageType[] = [
  {
    title: "Blue pagination",
    card: <BluePagination />,
  },
];
