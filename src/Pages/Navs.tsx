import React, { useContext } from "react";
import Nav from "../Components/Nav/Nav";

import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function Forms() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <Nav toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default Forms;
