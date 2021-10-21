import { createContext } from "react";
import { THEME } from "@/util/constant";

export const Context = createContext({
  theme: THEME.DARK,
  onToggleTheme: () => {},
});
