import { useContext } from "react";
import * as Styled from "./styles";
import { pagesListData } from "pages/Home/data/PageListData";
import { HashLink } from "react-router-hash-link";
import { PaletteMode } from "@mui/material";
import {
  ColorModeContext,
  ColorModeContextType,
} from "core/provider/ThemeProvider/ThemeProvider";

const Header = () => {
  const { setMode } = useContext(ColorModeContext) as ColorModeContextType;

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  };
  return (
    <Styled.HeaderContainer>
      <Styled.Name>Maliheh</Styled.Name>
      <button onClick={toggleColorMode}>Toggle mode</button>

      {pagesListData.map((page) => (
        <Styled.Pages key={page.id}>
          <HashLink smooth to={page.path} style={{ textDecoration: "none" }}>
            <Styled.PageName active={page.id === 0}>
              {page.name}
            </Styled.PageName>
          </HashLink>
        </Styled.Pages>
      ))}
      <Styled.CV />
    </Styled.HeaderContainer>
  );
};

export default Header;
