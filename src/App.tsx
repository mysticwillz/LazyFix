import { Routes, Route } from "react-router-dom";
import { ButtonsPage, FormsPage, HomePage, SpinnersPage } from "./Pages";
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
      </ModeContext.Provider>
    </>
  );
}

export default App;
