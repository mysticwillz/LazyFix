import { Routes, Route } from "react-router-dom";
import {
  ButtonsPage,
  CardsPage,
  FormsPage,
  HomePage,
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
        </Routes>
        <Routes>
          <Route path="/buttons" element={<ButtonsPage />} />
        </Routes>
        <Routes>
          <Route path="/spinners" element={<SpinnersPage />} />
        </Routes>
        <Routes>
          <Route path="/forms" element={<FormsPage />} />
        </Routes>
        <Routes>
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
        <Routes>
          <Route path="/navigations" element={<NavsPage />} />
        </Routes>
      </ModeContext.Provider>
    </>
  );
}

export default App;
