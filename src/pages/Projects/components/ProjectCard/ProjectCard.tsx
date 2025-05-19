import { ProjectsItemType } from "pages/Projects/data/ProjectsData";
import { FC } from "react";
import * as Styled from "./styles";

const ProjectCard: FC<ProjectsItemType> = (props) => {
  const { title, description, isApp = false, url, image } = props;

  const openUrl = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <Styled.Card hasUrl={!!url} onClick={openUrl}>
      <Styled.ImageFrame>
        <Styled.Image src={image} alt={title} isApp={isApp} />
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
