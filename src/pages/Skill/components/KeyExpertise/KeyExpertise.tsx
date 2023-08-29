import { KeyExpertiseList } from "./KeyExpertiseList";
import * as Styled from "./styles";
import arrow from "assets/images/arrow-right.png";

const KeyExpertise = () => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>Key Expertise</Styled.Title>
      </Styled.TitleContainer>

      {KeyExpertiseList.map((item) => (
        <Styled.Expertise key={item.id}>
          <Styled.Arrow src={arrow} />
          <Styled.Text>{item.title}</Styled.Text>
        </Styled.Expertise>
      ))}
    </Styled.Container>
  );
};

export default KeyExpertise;
