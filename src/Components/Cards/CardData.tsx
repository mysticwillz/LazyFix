import PurpleLogin from "../Forms/PurpleLogin/PurpleLogin";


interface CardType {
  title: string;
  card: JSX.Element;
}
export const CardData: CardType[] = [
  {
    title: " Login and register card",
    card : <PurpleLogin />,
  },
];
