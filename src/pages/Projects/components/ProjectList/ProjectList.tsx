import { useState } from "react";
import * as Styled from "./styles";
import ProjectCard from "../ProjectCard";
import {
  projectsData,
  ProjectsItemType,
} from "pages/Projects/data/ProjectsData";

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);
  const cardPerRow = 3;

  function splitArray(arr: ProjectsItemType[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  //to make each row have 3 items
  const chunkedProjectsData = splitArray(projectsData, cardPerRow);

  //to show 6 items at first
  const showNumber = showAll ? projectsData.length : 6;

  return (
    <Styled.Container>
      {chunkedProjectsData.map((groups) => (
        <Styled.List>
          {groups.map(
            (project) =>
              project.id < showNumber && (
                <Styled.CardContainer rows={cardPerRow}>
                  <ProjectCard {...project} />
                </Styled.CardContainer>
              )
          )}
        </Styled.List>
      ))}

      <Styled.MoreButton
        title="View More"
        color="inherit"
        onClick={() => setShowAll(!showAll)}
      />
    </Styled.Container>
  );
};

export default ProjectList;
