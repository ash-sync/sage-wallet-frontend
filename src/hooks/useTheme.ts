import { ThemeProviderContext } from "@/context/theme.context";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used withing a ThemeProvider");
  }

  return context;
};
