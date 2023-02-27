import React, { useContext } from "react";
import Form from "../Components/Forms/Form";

import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function Forms() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <Form toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default Forms;
