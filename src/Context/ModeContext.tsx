import { createContext } from "react";

export const ModeContext = createContext({
  toggleTheme: true,
  setToggleTheme: (toggleTheme: boolean) => {},
});
