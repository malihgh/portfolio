import React, { FC, ReactNode } from "react";
import { ThemeProvider, PaletteMode } from "@mui/material";
import { HandleSth } from "core/styles/theme";
import GlobalStyle from "core/styles/globalStyle";

interface StyledThemeType {
  children: ReactNode;
}

export interface ColorModeContextType {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}
export const ColorModeContext =
  React.createContext<ColorModeContextType | null>(null);

const StyledThemeProvider: FC<StyledThemeType> = ({ children }) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const obj = React.useMemo(() => ({ mode, setMode }), [mode]);

  return (
    <ColorModeContext.Provider value={obj}>
      <ThemeProvider theme={HandleSth(mode)}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default StyledThemeProvider;
