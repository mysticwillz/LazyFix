import React, { useContext } from "react";

import HowToUse from "../Components/HowToUse/HowToUse";

import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function HowTo() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <HowToUse toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default HowTo;
