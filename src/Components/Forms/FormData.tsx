import Slide from "../Buttons/Slide/Slide";

interface FormType {
  title: string;
  form: JSX.Element;
}
export const FormData: FormType[] = [
  {
    title: " slide button effect",
    form: <Slide />,
  },
];
