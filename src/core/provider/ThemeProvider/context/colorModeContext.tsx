import { createContext } from "react";
import { PaletteMode } from "@mui/material";

export interface ColorModeContextType {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}
export const ColorModeContext = createContext<ColorModeContextType | null>(
  null
);
