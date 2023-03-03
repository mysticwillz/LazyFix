import AppleCard from "./AppleCard/AppleCard";

interface CardType {
  title: string;
  card: JSX.Element;
}
export const CardData: CardType[] = [
  {
    title: "Apple card",
    card: <AppleCard />,
  },
];
