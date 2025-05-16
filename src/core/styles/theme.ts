import { PaletteMode, createTheme } from "@mui/material";

function isLightMode(mode: PaletteMode): mode is "light" {
  return mode === "light";
}
export const Theme = (mode: PaletteMode) => {
  return createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
    },
    palette: {
      mode: mode,
      primary: {
        main: "#2FBFBF",
        light: "#2fbfbf24",
      },
      secondary: {
        main: "#FFB400",
      },
      text: {
        primary: isLightMode(mode) ? "#303535" : "#fff",
        secondary: "#FFF",
      },
      info: {
        main: isLightMode(mode) ? "#6c6c6c" : "#cacaca",
      },
    },
  });
};
