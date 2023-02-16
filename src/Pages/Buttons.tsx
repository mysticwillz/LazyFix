import React, { useContext } from "react";
import Button from "../Components/Buttons/Button";
import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function Buttons() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <Button toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default Buttons;
