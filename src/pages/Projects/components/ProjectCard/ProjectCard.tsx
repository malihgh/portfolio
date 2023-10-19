import { FC } from "react";
import * as Styled from "./styles";
import { ProjectsItemType } from "pages/Projects/data/ProjectsData";

const ProjectCard: FC<ProjectsItemType> = (props) => {
  const { title, description, image } = props;

  return (
    <Styled.Card>
      <Styled.ImageFrame>
        <Styled.Image src={image} alt="images" />
      </Styled.ImageFrame>

      <Styled.InfoContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

        {/* Add a details page and link it to this button--> arrow-up.svg icon */}
      </Styled.InfoContainer>
    </Styled.Card>
  );
};

export default ProjectCard;
