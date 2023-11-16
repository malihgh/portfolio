import * as Styled from "./styles";
import pointer from "assets/images/pinter-short-green.svg";
import excited from "assets/images/excited-shape.svg";
import Button from "core/components/Button";
import { HashLink } from "react-router-hash-link";

const Intro = () => {
  return (
    <Styled.IntroContainer>
      <Styled.Shape src={excited} />
      <Styled.Pointer src={pointer} />
      <Styled.Title>
        Hello!
        <div /> I’m Maliheh Ghasemian,
        <div /> a Front End Developer.
      </Styled.Title>
      <Styled.Description>
        You can see a young and passionate Front End developer who is always
        looking for new challenges and opportunities to learn and grow. Let me
        explain a little bit about myself.
      </Styled.Description>

      <HashLink to="/#skill" smooth style={{ textDecoration: "none" }}>
        <Button title="Get Started" style={{ marginTop: 55 }} />
      </HashLink>
    </Styled.IntroContainer>
  );
};

export default Intro;
