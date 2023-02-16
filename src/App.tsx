import { Routes, Route } from "react-router-dom";
import { ButtonsPage, HomePage } from "./Pages";
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
      </ModeContext.Provider>
    </>
  );
}

export default App;
