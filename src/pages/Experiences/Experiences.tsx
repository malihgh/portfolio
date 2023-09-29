import ExperienceTitle from "./components/ExperienceTitle";
import * as Styled from "./styles";

const Experiences = () => {
  return (
    <Styled.ExperiencesContainer>
      <Styled.Row>
        <ExperienceTitle />
        <Styled.RightPart>right</Styled.RightPart>
      </Styled.Row>
    </Styled.ExperiencesContainer>
  );
};

export default Experiences;
