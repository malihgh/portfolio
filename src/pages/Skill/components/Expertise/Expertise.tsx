import * as Styled from "./styles";
import { ExpertiseList } from "./ExpertiseList";

const Expertise = () => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>Expertise</Styled.Title>
      </Styled.TitleContainer>

      {ExpertiseList.map((category) => (
        <Styled.Category>
          {category.items.map((item) => (
            <Styled.Expertise>
              <Styled.Text>{item}</Styled.Text>
            </Styled.Expertise>
          ))}
        </Styled.Category>
      ))}
    </Styled.Container>
  );
};

export default Expertise;
