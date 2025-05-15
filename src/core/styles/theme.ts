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
    shadows: [
      "none",
      "rgba(100, 100, 111, 0.2) 0px 7px 20px 0px",
      ...Array(23).fill("none"),
    ] as [
      "none",
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ],
  });
};
