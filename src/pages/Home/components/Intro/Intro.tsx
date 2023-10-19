import * as Styled from "./styles";
import pointer from "assets/images/pinter-short-green.png";
import excited from "assets/images/excited-shape.png";
import Button from "core/components/Button";
import { HashLink } from "react-router-hash-link";

const Intro = () => {
  return (
    <Styled.IntroContainer>
      <Styled.Shape src={excited} />
      <Styled.Pointer src={pointer} />
      <Styled.Title>
        Hello, I’m Maliheh Ghasemian A Front End Developer
      </Styled.Title>
      <Styled.Description>
        I’m 26 and I’m living in Lugano and I am working at Geomatic group at
        SUPSI as a front-end developer, working with a variety of technologies
        such as React JS and Vue JS.
      </Styled.Description>

      <HashLink to="/#skill" smooth style={{ textDecoration: "none" }}>
        <Button title="Get Started" style={{ marginTop: 55 }} />
      </HashLink>
    </Styled.IntroContainer>
  );
};

export default Intro;
