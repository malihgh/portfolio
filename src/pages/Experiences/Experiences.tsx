import ExperienceBox from "./components/ExperienceBox";
import ExperienceTitle from "./components/ExperienceTitle";
import * as Styled from "./styles";

const Experiences = () => {
  return (
    <Styled.ExperiencesContainer>
      <Styled.Row>
        <ExperienceTitle />
        <ExperienceBox />
      </Styled.Row>
    </Styled.ExperiencesContainer>
  );
};

export default Experiences;
