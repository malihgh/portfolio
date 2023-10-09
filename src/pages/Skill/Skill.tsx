import * as Styled from "./styles";
import KeyExpertise from "pages/Skill/components/KeyExpertise";
import Expertise from "pages/Skill/components/Expertise";
import star from "assets/images/star-outlined.png";
import HeaderWithIcon from "core/components/HeaderWithIcon";

const Skill = () => {
  return (
    <Styled.SkillContainer>
      <HeaderWithIcon
        title="My Skills"
        subTitle="Here you will find more information, what I do, and my current skills
        mostly in terms of programming and technology"
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
