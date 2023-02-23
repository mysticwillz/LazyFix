import BlockSpin from "./BlockSpin/BlockSpin";
import Bouncy from "./Bouncy/Bouncy";
import CircleLoad from "./CircleLoad/CircleLoad";
import Loading from "./Loading/Loading";
import LoadText from "./LoadText/LoadText";
import Matrix from "./Matrix/Matrix";
import StringSpin from "./StringSpin/StringSpin";
import ThickShade from "./ThickShade/ThickShade";
import Whoop from "./Whoop/Whoop";
import Zip from "./Zip/Zip";

interface SpinType {
  title: string;
  spinner: JSX.Element;
}
export const SpinnerData: SpinType[] = [
  {
    title: " Loading spinner effect",
    spinner: <Loading />,
  },
  {
    title: " Load text spinner effect ",
    spinner: <LoadText />,
  },
  {
    title: "    Block Spin Spinner Effect",
    spinner: <BlockSpin />,
  },
  {
    title: "  Whoop Spinner effect",
    spinner: <Whoop />,
  },
  {
    title: " circle load spinner effect",
    spinner: <CircleLoad />,
  },

  {
    title: "stringspin spinner effect",
    spinner: <StringSpin />,
  },
  {
    title: " Thick shade spinner effect",
    spinner: <ThickShade />,
  },
  {
    title: "  matrix spinner effect",
    spinner: <Matrix />,
  },
  {
    title: " bouncy spinner effect",
    spinner: <Bouncy />,
  },
  {
    title: " zip spinner effect",
    spinner: <Zip />,
  },
];
