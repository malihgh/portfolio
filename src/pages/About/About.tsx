import * as Styled from "./styles";
import AboutPhoto from "./components/AboutPhoto";
import AboutIntro from "./components/AboutIntro";

const About = () => {
  return (
    <Styled.AboutContainer>
      <Styled.Row>
        <AboutPhoto />
        <AboutIntro />
      </Styled.Row>
    </Styled.AboutContainer>
  );
};

export default About;
