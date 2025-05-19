import { PaletteMode } from "@mui/material";
import darkMode from "assets/images/dark-mode.svg";
import lightMode from "assets/images/light-mode.svg";
import Link from "core/components/Link";
import {
  ColorModeContext,
  ColorModeContextType,
} from "core/provider/ThemeProvider/context/colorModeContext";
import { pagesListData } from "pages/Home/data/PageListData";
import { useContext } from "react";
import * as Styled from "./styles";
import { HeaderContainerOverlay } from "./styles";
import useCurrentHash from "./useCurrentHash";

const Header = () => {
  const { mode, setMode } = useContext(
    ColorModeContext
  ) as ColorModeContextType;
  const fullPath = useCurrentHash();

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  };
  const modeIcon = mode === "light" ? darkMode : lightMode;

  return (
    <Styled.HeaderContainer>
      <HeaderContainerOverlay>
        <Styled.Name to={pagesListData[0].path}>Maliheh</Styled.Name>

        <Styled.PageContainer>
          {pagesListData.map((page) => (
            <Styled.Pages key={page.id}>
              <Link to={page.path}>
                <Styled.PageName active={fullPath === page.path}>
                  {page.name}
                </Styled.PageName>
              </Link>
            </Styled.Pages>
          ))}

          <Styled.DarkMode src={modeIcon} onClick={toggleColorMode} />
        </Styled.PageContainer>

        <Styled.CVContainer>
          <Styled.CVMakeRight>
            <Styled.CV />
          </Styled.CVMakeRight>
        </Styled.CVContainer>
      </HeaderContainerOverlay>
    </Styled.HeaderContainer>
  );
};

export default Header;
