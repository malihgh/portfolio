import * as Styled from "./styles";
import ExperienceItem from "../ExperienceItem";
import { ExperienceList } from "./ExperienceList";

const ExperienceBox = () => {
  return (
    <Styled.Container>
      {ExperienceList.map((item) => (
        <ExperienceItem data={item} key={item.id} />
      ))}
    </Styled.Container>
  );
};

export default ExperienceBox;
