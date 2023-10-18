import * as Styled from "./styles";
import ExperienceItem from "../ExperienceItem";
import { ExperienceData } from "../../data/ExperienceData";

const ExperienceBox = () => {
  return (
    <Styled.Container>
      {ExperienceData.map((item) => (
        <ExperienceItem data={item} key={item.id} />
      ))}
    </Styled.Container>
  );
};

export default ExperienceBox;
