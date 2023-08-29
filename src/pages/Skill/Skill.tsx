import * as Styled from "./styles";
import KeyExpertise from "pages/Skill/components/KeyExpertise";
import Expertise from "pages/Skill/components/Expertise";
import star from "assets/images/star-outlined.png";
import shape from "assets/images/news-shapes.png";

const Skill = () => {
  return (
    <Styled.SkillContainer>
      <Styled.Title>
        My Skills
        <Styled.Shape src={shape} />
        <Styled.Star src={star} />
      </Styled.Title>

      <Styled.SubTitle>
        Here you will find more information, what I do, and my current skills
        mostly in terms of programming and technology
      </Styled.SubTitle>

      <Styled.Row>
        <KeyExpertise />
        <Expertise />
      </Styled.Row>
    </Styled.SkillContainer>
  );
};

export default Skill;
