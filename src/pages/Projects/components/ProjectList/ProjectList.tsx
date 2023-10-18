import ProjectCard from "../ProjectCard";
import * as Styled from "./styles";

const ProjectList = () => {
  return (
    <Styled.Container>
      <Styled.List>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Styled.List>
    </Styled.Container>
  );
};

export default ProjectList;
