import * as Styled from "./styles";

const pages = [
  { id: 0, name: "Home" },
  { id: 1, name: "My skills" },
  { id: 2, name: "About" },
  { id: 3, name: "Experience" },
  { id: 4, name: "projects" },
  { id: 5, name: "Contact" },
];
const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.Name>Maliheh</Styled.Name>
      {pages.map((page) => (
        <Styled.Pages key={page.id}>
          <Styled.PageName active={page.id === 0}>{page.name}</Styled.PageName>
        </Styled.Pages>
      ))}
      <Styled.CV />
    </Styled.HeaderContainer>
  );
};

export default Header;
