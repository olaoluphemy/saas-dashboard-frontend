import { useContext } from "react";
import { themeContext } from "../_contexts/themeContext";

export function useTheme() {
  const value = useContext(themeContext);

  return value;
}
