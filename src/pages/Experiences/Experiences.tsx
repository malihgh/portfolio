import ExperienceItem from "./components/ExperienceItem";
import ExperienceTitle from "./components/ExperienceTitle";
import * as Styled from "./styles";

const Experiences = () => {
  return (
    <Styled.ExperiencesContainer>
      <Styled.Row>
        <ExperienceTitle />
        <Styled.RightPart>
          <ExperienceItem />
          <ExperienceItem />
          <ExperienceItem />
          <ExperienceItem />
        </Styled.RightPart>
      </Styled.Row>
    </Styled.ExperiencesContainer>
  );
};

export default Experiences;
