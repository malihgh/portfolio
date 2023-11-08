import * as Styled from "./styles";
import { pagesListData } from "pages/Home/data/PageListData";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.Name>Maliheh</Styled.Name>
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
