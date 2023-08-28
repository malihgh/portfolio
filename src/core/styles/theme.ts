import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#2FBFBF",
      light: "#2fbfbf24",
    },
    secondary: {
      main: "#FFB400",
    },
    text: {
      primary: "#303535",
      secondary: "#FFF",
    },
  },
});
