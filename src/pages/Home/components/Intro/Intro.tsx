import * as Styled from "./styles";
import pointer from "assets/images/pinter-short-green.svg";
import excited from "assets/images/excited-shape.svg";
import Button from "core/components/Button";
import Link from "core/components/Link";

const Intro = () => {
  return (
    <Styled.IntroContainer>
      <Styled.Shape src={excited} />
      <Styled.Pointer src={pointer} />
      <Styled.Title>
        Hello!
        <div /> I’m Maliheh Ghasemian,
        <div /> a Full Stack Developer.
      </Styled.Title>
      <Styled.Description>
        I'm a Full Stack developer who enjoys turning ideas into{" "}
        <strong>fast </strong>, <strong>scalable</strong>, and{" "}
        <strong>user-friendly</strong> web applications. I’m always exploring
        new <strong>technologies</strong>,{" "}
        <strong>tackling challenging problems</strong>, and pushing{" "}
        <strong>my skills</strong> a little further. Here’s a bit about my
        journey.
      </Styled.Description>

      <Link to="/#skill">
        <Button title="Get Started" style={{ marginTop: 55 }} />
      </Link>
    </Styled.IntroContainer>
  );
};

export default Intro;
