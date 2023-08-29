import KeyExpertise from "pages/Skill/components/KeyExpertise/KeyExpertise";
import * as Styled from "./styles";

const Skill = () => {
  return (
    <Styled.SkillContainer>
      <Styled.Title>My Skills</Styled.Title>
      <Styled.SubTitle>
        Here you will find more information, what I do, and my current skills
        mostly in terms of programming and technology
      </Styled.SubTitle>

      <Styled.Row>
        <KeyExpertise />
        <Styled.Ex>Ex</Styled.Ex>
      </Styled.Row>
    </Styled.SkillContainer>
  );
};

export default Skill;
