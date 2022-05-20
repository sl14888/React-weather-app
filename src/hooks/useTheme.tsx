import { useContext } from "react";
import { ThemeContext } from "../context/ThremeContext";

export const useTheme = () => useContext(ThemeContext)