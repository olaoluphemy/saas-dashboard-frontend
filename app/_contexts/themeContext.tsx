"use client";

import { createContext, useEffect, useState } from "react";

type Mode = "light" | "dark";

interface initialStateProps {
  colorMode: Mode;
  handleThemeChange: () => void;
}

const initialState: initialStateProps = {
  colorMode: "light",
  handleThemeChange: () => null,
};

export const themeContext = createContext(initialState);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<Mode>("light");

  useEffect(() => {
    const persistedThemeColor = localStorage.getItem("theme");

    if (persistedThemeColor === "dark")
      document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    setColorMode(persistedThemeColor as Mode);
  }, []);

  function handleThemeChange() {
    if (colorMode === "light") {
      setColorMode("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setColorMode("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <themeContext.Provider value={{ colorMode, handleThemeChange }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProvider;
