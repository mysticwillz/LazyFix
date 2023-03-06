import React, { useContext } from "react";
import GettingStarted from "../Components/GetStarted/GetStarted";
import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function GetStarted() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <GettingStarted toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default GetStarted;
