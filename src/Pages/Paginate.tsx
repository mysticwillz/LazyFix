import React, { useContext } from "react";
import Pagination from "../Components/Paginate/Pagination";

import { ModeContext } from "../Context/ModeContext";
import AppLayouts from "../Layouts/AppLayouts";

function Paginate() {
  const { toggleTheme } = useContext(ModeContext);
  return (
    <>
      <AppLayouts>
        <Pagination toggleTheme={toggleTheme} />
      </AppLayouts>
    </>
  );
}

export default Paginate;
