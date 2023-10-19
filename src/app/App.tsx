import StyledThemeProvider from "core/provider/ThemeProvider";
import Router from "./Router";

function App() {
  return (
    <StyledThemeProvider>
      <style>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>

      <Router />
    </StyledThemeProvider>
  );
}

export default App;
