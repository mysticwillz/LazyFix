import React, { useContext } from "react";
import Contributions from "../Components/Contributions/Contributions";

import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function Contribute() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <Contributions toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default Contribute;
