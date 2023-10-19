import * as Styled from "./styles";
import { HashLink } from "react-router-hash-link";

const pages = [
  { id: 0, name: "Home", path: "#home" },
  { id: 1, name: "My skills", path: "#skill" },
  { id: 2, name: "About", path: "#about" },
  { id: 3, name: "Experience", path: "#experiences" },
  { id: 4, name: "projects", path: "#projects" },
  { id: 5, name: "Contact", path: "/" },
];
const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.Name>Maliheh</Styled.Name>
      {pages.map((page) => (
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
