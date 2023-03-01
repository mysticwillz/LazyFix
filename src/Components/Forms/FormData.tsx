import BlackLogin from "./BlackLogin/BlackLogin";
import NewsLetter from "./NewsLetter/NewsLetter";
import OtpForm from "./OTPForm/OtpForm";
import PinkContactUs from "./PinkContactUs/PinkContactUs";
import PurpleLogin from "./PurpleLogin/PurpleLogin";
import RadiusSignup from "./RadiusSignup/RadiusSignup";

interface FormType {
  title: string;
  form: JSX.Element;
}
export const FormData: FormType[] = [
  {
    title: " Login and register form",
    form: <PurpleLogin />,
  },
  {
    title: " Contact us form",
    form: <PinkContactUs />,
  },
  {
    title: " Login form",
    form: <BlackLogin />,
  },
  {
    title: " OTP Verification form",
    form: <OtpForm />,
  },
  {
    title: " Newsletter form",
    form: <NewsLetter />,
  },
  {
    title: "Login form",
    form: <RadiusSignup />,
  },
];
