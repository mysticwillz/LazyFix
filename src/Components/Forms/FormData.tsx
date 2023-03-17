import { blackCssCode, blackHtmlCode } from "./BlackLogin/blackCopy";
import BlackLogin from "./BlackLogin/BlackLogin";
import { newsCssCode, newsHtmlCode } from "./NewsLetter/newsCopy";
import NewsLetter from "./NewsLetter/NewsLetter";
import { otpCssCode, otpHtmlCode } from "./OTPForm/otpCopy";
import OtpForm from "./OTPForm/OtpForm";
import PinkContactUs from "./PinkContactUs/PinkContactUs";
import { pinkCssCode, pinkHtmlCode } from "./PinkContactUs/pinkCopy";
import { purpleCssCode, purpleHtmlCode } from "./PurpleLogin/purpleCopy";
import PurpleLogin from "./PurpleLogin/PurpleLogin";
import { radiusCssCode, radiusHtmlCode } from "./RadiusSignup/radiusCopy";
import RadiusSignup from "./RadiusSignup/RadiusSignup";

interface FormType {
  title: string;
  form: JSX.Element;
  html: string;
  css: string;
}
export const FormData: FormType[] = [
  {
    title: " Login and register form",
    form: <PurpleLogin />,
    html: purpleHtmlCode,
    css: purpleCssCode,
  },
  {
    title: " Contact us form",
    form: <PinkContactUs />,
    html: pinkHtmlCode,
    css: pinkCssCode,
  },
  {
    title: " Login form",
    form: <BlackLogin />,
    html: blackHtmlCode,
    css: blackCssCode,
  },
  {
    title: " OTP Verification form",
    form: <OtpForm />,
    html: otpHtmlCode,
    css: otpCssCode,
  },
  {
    title: " Newsletter form",
    form: <NewsLetter />,
    html: newsHtmlCode,
    css: newsCssCode,
  },
  {
    title: "Login form",
    form: <RadiusSignup />,
    html: radiusHtmlCode,
    css: radiusCssCode,
  },
];
