import * as Styled from "./styles";
import newsWhite from "assets/images/news-shapes-white.svg";
import starWhite from "assets/images/star-white.svg";
import Button from "core/components/Button";

const LetsTalk = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Title>
          let's work together
          <Styled.Shape src={newsWhite} />
        </Styled.Title>
        <Styled.Description>
          If you have a project that you want to get started, think you need my
          help with something or just fancy saying hey, then get in touch.
        </Styled.Description>
      </Styled.TextContainer>
      <Styled.Star src={starWhite} />

      <Styled.ButtonContainer>
        <Button title="Let's Talk" color="secondary" />
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default LetsTalk;
