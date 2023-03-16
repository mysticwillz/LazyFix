import BlockSpin from "./BlockSpin/BlockSpin";
import { blockCssCode, blockHtmlCode } from "./BlockSpin/copyBlockSpin";
import Bouncy from "./Bouncy/Bouncy";
import { bouncyCssCode, bouncyHtmlCode } from "./Bouncy/bouncyCopy";
import { circleCssCode, circleHtmlCode } from "./CircleLoad/circleCopy";
import CircleLoad from "./CircleLoad/CircleLoad";
import Loading from "./Loading/Loading";
import { loadingCssCode, loadingHtmlCode } from "./Loading/loadingCopy";
import LoadText from "./LoadText/LoadText";
import { loadTextCssCode, loadTextHtmlCode } from "./LoadText/loadTextCopy";
import Matrix from "./Matrix/Matrix";
import { matrixCssCode, matrixHtmlCode } from "./Matrix/matrixCopy";
import { stringTextCssCode } from "./StringSpin/stringCopy";
import StringSpin from "./StringSpin/StringSpin";
import { thickTextCssCode, thickTextHtmlCode } from "./ThickShade/thickCopy";
import ThickShade from "./ThickShade/ThickShade";
import Whoop from "./Whoop/Whoop";
import { whoopTextCssCode, whoopTextHtmlCode } from "./Whoop/whoopCopy";
import Zip from "./Zip/Zip";
import { zipTextCssCode, zipTextHtmlCode } from "./Zip/zipCopy";

interface SpinType {
  title: string;
  spinner: JSX.Element;
  html: string;
  css: string;
}
export const SpinnerData: SpinType[] = [
  {
    title: " Loading spinner effect",
    spinner: <Loading />,
    html: loadingHtmlCode,
    css: loadingCssCode,
  },
  {
    title: " Load text spinner effect ",
    spinner: <LoadText />,
    html: loadTextHtmlCode,
    css: loadTextCssCode,
  },
  {
    title: "    Block Spin Spinner Effect",
    spinner: <BlockSpin />,
    html: blockHtmlCode,
    css: blockCssCode,
  },
  {
    title: "  Whoop Spinner effect",
    spinner: <Whoop />,
    html: whoopTextHtmlCode,

    css: whoopTextCssCode,
  },
  {
    title: " circle load spinner effect",
    spinner: <CircleLoad />,
    html: circleHtmlCode,
    css: circleCssCode,
  },

  {
    title: "stringspin spinner effect",
    spinner: <StringSpin />,
    html: stringTextCssCode,
    css: stringTextCssCode,
  },
  {
    title: " Thick shade spinner effect",
    spinner: <ThickShade />,
    html: thickTextHtmlCode,
    css: thickTextCssCode,
  },
  {
    title: "  matrix spinner effect",
    spinner: <Matrix />,
    html: matrixHtmlCode,
    css: matrixCssCode,
  },
  {
    title: " bouncy spinner effect",
    spinner: <Bouncy />,
    html: bouncyHtmlCode,
    css: bouncyCssCode,
  },
  {
    title: " zip spinner effect",
    spinner: <Zip />,
    html: zipTextHtmlCode,
    css: zipTextCssCode,
  },
];
