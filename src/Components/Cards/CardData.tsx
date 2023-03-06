import AppleCard from "./AppleCard/AppleCard";
import Neophorm from "./NeoPhorm/Neophorm";
import ProductCard from "./ProductCard/ProductCard";

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
  {
    title: "Product card",
    card: <ProductCard />,
  },
];
