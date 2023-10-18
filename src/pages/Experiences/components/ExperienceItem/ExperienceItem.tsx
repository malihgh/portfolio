import * as Styled from "./styles";
import { FC } from "react";
import { ExperienceItemType } from "../../data/ExperienceData";

type ExperienceItemProps = {
  data: ExperienceItemType;
};
const ExperienceItem: FC<ExperienceItemProps> = (props) => {
  const { id, date, title, description } = props.data;

  return (
    <Styled.Container>
      <Styled.Duration>{date}</Styled.Duration>
      <Styled.SectionLine>
        <Styled.Circle isPrimary={id % 2 === 0} />
        <Styled.Line />
      </Styled.SectionLine>
      <Styled.DescriptionContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
};

export default ExperienceItem;
