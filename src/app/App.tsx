import * as Styled from "./styles";
import StyledThemeProvider from "core/provider/ThemeProvider/ThemeProvider";
import Home from "pages/Home/Home";

function App() {
  return (
    <StyledThemeProvider>
      <style>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Styled.Container>
        <Home />
      </Styled.Container>
    </StyledThemeProvider>
  );
}

export default App;
