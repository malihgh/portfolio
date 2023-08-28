import * as Styled from "./styles";

const pages = [
  { name: "Home" },
  { name: "My skills" },
  { name: "About" },
  { name: "Experience" },
  { name: "projects" },
  { name: "Contact" },
];
const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.Name>Maliheh</Styled.Name>
      {pages.map((page, index) => (
        <Styled.Pages key={index}>
          <Styled.PageName>{page.name}</Styled.PageName>
        </Styled.Pages>
      ))}
      <Styled.CV>Download CV</Styled.CV>
    </Styled.HeaderContainer>
  );
};

export default Header;
