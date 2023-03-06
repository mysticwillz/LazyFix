import AppleCard from "./AppleCard/AppleCard";
import ContactCard from "./ContactCard/ContactCard";
import FlipCard from "./FlipCard/FlipCard";
import Neophorm from "./NeoPhorm/Neophorm";
import Premium from "./Premium/Premium";
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
  {
    title: "Contact card",
    card: <ContactCard />,
  },
  {
    title: "Flip card",
    card: <FlipCard />,
  },
  {
    title: "Premium card",
    card: <Premium />,
  },
];
