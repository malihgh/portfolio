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
    },
    secondary: {
      main: "#FFB400",
    },
  },
});
