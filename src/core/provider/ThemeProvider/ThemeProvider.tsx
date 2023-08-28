import { FC, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "core/styles/theme";
import GlobalStyle from "core/styles/globalStyle";

interface StyledThemeType {
  children: ReactNode;
}

const StyledThemeProvider: FC<StyledThemeType> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledThemeProvider;
