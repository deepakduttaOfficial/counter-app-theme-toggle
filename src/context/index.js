import React, { useState } from "react";
import { createContext } from "react";
export const MyContext = createContext();

function ContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider
      value={{ isDarkTheme, setIsDarkTheme, count, setCount }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
