import { useContext } from "react";
import * as Styled from "./styles";
import { pagesListData } from "pages/Home/data/PageListData";
import { HashLink } from "react-router-hash-link";
import { PaletteMode } from "@mui/material";
import {
  ColorModeContext,
  ColorModeContextType,
} from "core/provider/ThemeProvider/context/colorModeContext";
import darkMode from "assets/images/dark-mode.svg";
import lightMode from "assets/images/light-mode.svg";

const Header = () => {
  const { mode, setMode } = useContext(
    ColorModeContext
  ) as ColorModeContextType;

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  };
  const modeIcon = mode === "light" ? darkMode : lightMode;

  return (
    <Styled.HeaderContainer>
      <Styled.Name>Maliheh</Styled.Name>

      <Styled.PageContainer>
        {pagesListData.map((page) => (
          <Styled.Pages key={page.id}>
            <HashLink smooth to={page.path} style={{ textDecoration: "none" }}>
              <Styled.PageName active={page.id === 0}>
                {page.name}
              </Styled.PageName>
            </HashLink>
          </Styled.Pages>
        ))}

        <Styled.DarkMode src={modeIcon} onClick={toggleColorMode} />
      </Styled.PageContainer>

      <Styled.DarkModeContainer>
        <Styled.DarkModeMakeRight>
          <Styled.CV />
        </Styled.DarkModeMakeRight>
      </Styled.DarkModeContainer>
    </Styled.HeaderContainer>
  );
};

export default Header;
