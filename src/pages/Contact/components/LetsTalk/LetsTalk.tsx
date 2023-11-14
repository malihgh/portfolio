import * as Styled from "./styles";
import newsWhite from "assets/images/news-shapes-white.svg";
import starWhite from "assets/images/star-white.svg";
import Button from "core/components/Button";
import { Link } from "react-router-dom";

const LetsTalk = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Title>
          let's work together
          <Styled.Shape src={newsWhite} />
        </Styled.Title>
        <Styled.Description>
          Got a project that needs my superhero touch?
          <div />
          Or maybe you just want to say 'Hey!' and make my day.
          <div /> Either way, let's chat – I'm here to save the day!
        </Styled.Description>
      </Styled.TextContainer>
      <Styled.Star src={starWhite} />

      <Styled.ButtonContainer>
        <Link
          to="mailto:malih.ghasemian@gmail.com"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button title="Let's Talk" color="secondary" />
        </Link>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default LetsTalk;
