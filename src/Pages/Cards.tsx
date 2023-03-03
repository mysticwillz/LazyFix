import React, { useContext } from "react";
import Card from "../Components/Cards/Card";

import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function Cards() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <Card toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default Cards;
