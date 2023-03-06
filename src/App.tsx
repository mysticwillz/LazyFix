import { Routes, Route } from "react-router-dom";
import {
  ButtonsPage,
  CardsPage,
  FormsPage,
  GetStartedPagePage,
  HomePage,
  HowToUsePage,
  NavsPage,
  SpinnersPage,
} from "./Pages";
import "./index.css";
import { ModeContext } from "./Context/ModeContext";
import { useState } from "react";

function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);
  return (
    <>
      <ModeContext.Provider value={{ toggleTheme, setToggleTheme }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/get-started" element={<GetStartedPagePage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/spinners" element={<SpinnersPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/navigations" element={<NavsPage />} />
        </Routes>
      </ModeContext.Provider>
    </>
  );
}

export default App;
