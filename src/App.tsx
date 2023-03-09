import { Routes, Route } from "react-router-dom";
import {
  ButtonsPage,
  CardsPage,
  ContributionsPage,
  FormsPage,
  GetStartedPagePage,
  HomePage,
  NavsPage,
  PaginationPage,
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
          <Route path="/contributions" element={<ContributionsPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/spinners" element={<SpinnersPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/navigations" element={<NavsPage />} />
          <Route path="/paginations" element={<PaginationPage />} />
        </Routes>
      </ModeContext.Provider>
    </>
  );
}

export default App;
