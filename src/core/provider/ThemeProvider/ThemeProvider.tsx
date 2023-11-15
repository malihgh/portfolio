import React, { FC, ReactNode } from "react";
import { ThemeProvider, PaletteMode } from "@mui/material";
import { HandleSth } from "core/styles/theme";
import GlobalStyle from "core/styles/globalStyle";
import { ColorModeContext } from "./context/colorModeContext";

interface StyledThemeType {
  children: ReactNode;
}

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
