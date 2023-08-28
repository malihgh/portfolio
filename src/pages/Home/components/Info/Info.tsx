import * as Styled from "./styles";
import pointer from "assets/Images/pinter-short-green.png";
import exicted from "assets/Images/excited-shape.png";

const Info = () => {
  return (
    <Styled.InfoContainer>
      <Styled.Shape src={exicted} />
      <Styled.Pointer src={pointer} />
      <Styled.Title>
        Hello, I’m Maliheh Ghasemian A Front End Developer
      </Styled.Title>
      <Styled.Description>
        I’m 26 and I’m living in Lugano and I am working at Geomatic group at
        SUPSI as a front-end developer, working with a variety of technologies
        such as React JS and Vue JS.
      </Styled.Description>
      <Styled.StartedButton>Get Started</Styled.StartedButton>
    </Styled.InfoContainer>
  );
};

export default Info;
