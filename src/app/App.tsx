import * as Styled from "./styles";
import StyledThemeProvider from "core/provider/ThemeProvider";
import About from "pages/About";
import Home from "pages/Home";
import Skill from "pages/Skill";

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
        <Skill />
        <About />
      </Styled.Container>
    </StyledThemeProvider>
  );
}

export default App;
