import BlackLogin from "./BlackLogin/BlackLogin";
import OtpForm from "./OTPForm/OtpForm";
import PinkContactUs from "./PinkContactUs/PinkContactUs";
import PurpleLogin from "./PurpleLogin/PurpleLogin";

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
];
