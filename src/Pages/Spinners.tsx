import React, { useContext } from "react";
import Spinner from "../Components/Spinners/Spinner";

import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function Spinners() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <Spinner toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default Spinners;
