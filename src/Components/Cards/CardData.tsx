import AppleCard from "./AppleCard/AppleCard";
import Neophorm from "./NeoPhorm/Neophorm";

interface CardType {
  title: string;
  card: JSX.Element;
}
export const CardData: CardType[] = [
  {
    title: "Apple card",
    card: <AppleCard />,
  },
  {
    title: "Neophorm card",
    card: <Neophorm />,
  },
];
