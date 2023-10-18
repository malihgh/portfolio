import * as Styled from "./styles";
import ProjectCard from "../ProjectCard";
import {
  projectsData,
  ProjectsItemType,
} from "pages/Projects/data/ProjectsData";

const ProjectList = () => {
  function splitArray(arr: ProjectsItemType[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  const chunkedProjectsData = splitArray(projectsData, 3);
  return (
    <Styled.Container>
      {chunkedProjectsData.map((groups) => (
        <Styled.List>
          {groups.map((project) => (
            <ProjectCard {...project} />
          ))}
        </Styled.List>
      ))}
    </Styled.Container>
  );
};

export default ProjectList;
