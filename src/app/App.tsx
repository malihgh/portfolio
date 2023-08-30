import * as Styled from "./styles";
import StyledThemeProvider from "core/provider/ThemeProvider/ThemeProvider";
import Home from "pages/Home/Home";
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
      </Styled.Container>
    </StyledThemeProvider>
  );
}

export default App;
