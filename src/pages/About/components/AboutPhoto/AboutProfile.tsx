import * as Styled from "./styles";
import profile from "assets/images/profile.png";
import starTop from "assets/images/circle-big.svg";
import starBottom from "assets/images/star-small.svg";

const AboutPhoto = () => {
  return (
    <Styled.AboutPhotoContainer>
      <Styled.Frame>
        <Styled.StarTop src={starTop} />
        <Styled.StartTopText>
          <strong>4+</strong> Years
          <br /> Experience
        </Styled.StartTopText>
        <Styled.StarBottom src={starBottom} />

        <Styled.BorderFrame />
        <Styled.Profile src={profile} />
      </Styled.Frame>
    </Styled.AboutPhotoContainer>
  );
};

export default AboutPhoto;
