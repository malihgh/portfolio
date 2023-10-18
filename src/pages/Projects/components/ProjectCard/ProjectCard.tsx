import * as Styled from "./styles";
import profile from "assets/images/profile.png";

const ProjectCard = () => {
  const projectDetails = {
    title: "Project Title",
    description: "Project Description",
    image: profile,
  };

  return (
    <Styled.Card>
      <Styled.ImageFrame>
        <Styled.Image src={projectDetails.image} />
      </Styled.ImageFrame>

      <Styled.InfoContainer>
        <Styled.Title>{projectDetails.title}</Styled.Title>
        <Styled.Description>{projectDetails.description}</Styled.Description>

        {/* Add a details page and link it to this button--> arrow-up.svg icon */}
      </Styled.InfoContainer>
    </Styled.Card>
  );
};

export default ProjectCard;
