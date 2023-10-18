import * as Styled from "./styles";
import { ExpertiseData } from "../../data/ExpertiseData";

const Expertise = () => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>Expertise</Styled.Title>
      </Styled.TitleContainer>

      {ExpertiseData.map((category) => (
        <Styled.Category key={category.id}>
          {category.items.map((item, index) => (
            <Styled.Expertise key={index}>
              <Styled.Text>{item}</Styled.Text>
            </Styled.Expertise>
          ))}
        </Styled.Category>
      ))}
    </Styled.Container>
  );
};

export default Expertise;
