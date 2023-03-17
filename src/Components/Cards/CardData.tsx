import AppleCard from "./AppleCard/AppleCard";
import { appleCssCode, appleHtmlCode } from "./AppleCard/appleCopy";
import CartCard from "./CartCard/CartCard";
import { cartCssCode, cartHtmlCode } from "./CartCard/cartCopy";
import ContactCard from "./ContactCard/ContactCard";
import { contactCssCode, contactHtmlCode } from "./ContactCard/contactCopy";
import FlipCard from "./FlipCard/FlipCard";
import { flipCssCode, flipHtmlCode } from "./FlipCard/flipCopy";
import { neoCssCode, neoHtmlCode } from "./NeoPhorm/neoCopy";
import Neophorm from "./NeoPhorm/Neophorm";
import Premium from "./Premium/Premium";
import { premiumCssCode, premiumHtmlCode } from "./Premium/premiumCopy";
import ProductCard from "./ProductCard/ProductCard";
import { productCssCode, productHtmlCode } from "./ProductCard/productCopy";

interface CardType {
  title: string;
  card: JSX.Element;
  html: string;
  css: string;
}
export const CardData: CardType[] = [
  {
    title: "Apple card",
    card: <AppleCard />,
    html: appleHtmlCode,
    css: appleCssCode,
  },
  {
    title: "Neophorm card",
    card: <Neophorm />,
    html: neoHtmlCode,
    css: neoCssCode,
  },
  {
    title: "Product card",
    card: <ProductCard />,
    html: productHtmlCode,
    css: productCssCode,
  },
  {
    title: "Contact card",
    card: <ContactCard />,
    html: contactHtmlCode,
    css: contactCssCode,
  },
  {
    title: "Flip card",
    card: <FlipCard />,
    html: flipHtmlCode,
    css: flipCssCode,
  },
  {
    title: "Premium card",
    card: <Premium />,
    html: premiumHtmlCode,
    css: premiumCssCode,
  },
  {
    title: "cart card",
    card: <CartCard />,
    html: cartHtmlCode,
    css: cartCssCode,
  },
];
