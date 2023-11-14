import * as Styled from "./styles";
import KeyExpertise from "pages/Skill/components/KeyExpertise";
import Expertise from "pages/Skill/components/Expertise";
import star from "assets/images/star-outlined.svg";
import HeaderWithIcon from "core/components/HeaderWithIcon";

const Skill = () => {
  return (
    <Styled.SkillContainer>
      <HeaderWithIcon
        title="My Skills"
        subTitle="Here you can find some of skill and technologies that I'm working with everyday."
        titleStyle={{
          margin: "auto",
        }}
      />
      <Styled.Star src={star} />

      <Styled.Row>
        <KeyExpertise />
        <Expertise />
      </Styled.Row>
    </Styled.SkillContainer>
  );
};

export default Skill;
