import * as Styled from "./styles";
import StyledThemeProvider from "core/provider/ThemeProvider/ThemeProvider";

function App() {
  return (
    <StyledThemeProvider>
      <Styled.Container>
        <div>Hello</div>
      </Styled.Container>
    </StyledThemeProvider>
  );
}

export default App;
