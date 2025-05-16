import * as Styled from "./styles";
import profile from "assets/images/programmer-girl.svg";
import starTop from "assets/images/circle-big.svg";

const AboutPhoto = () => {
  return (
    <Styled.AboutPhotoContainer>
      <Styled.Frame>
        <Styled.StarTop src={starTop} />
        <Styled.StartTopText>
          <strong>5+</strong> Years
          <br /> Experience
        </Styled.StartTopText>

        <Styled.BorderFrame />
        <Styled.Profile src={profile} />
      </Styled.Frame>
    </Styled.AboutPhotoContainer>
  );
};

export default AboutPhoto;
