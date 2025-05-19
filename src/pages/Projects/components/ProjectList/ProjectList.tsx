import { useState } from "react";
import * as Styled from "./styles";
import ProjectCard from "../ProjectCard";
import { projectsData } from "pages/Projects/data/ProjectsData";

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);

  //to show 6 items at first
  const showNumber = showAll ? projectsData.length : 6;

  return (
    <Styled.Container>
      <Styled.ContainerGPT>
        {projectsData.map(
          (project, index) =>
            project.id < showNumber && (
              <div key={index}>
                <ProjectCard {...project} />{" "}
              </div>
            )
        )}
      </Styled.ContainerGPT>

      <Styled.MoreButton
        title={showAll ? "View Less" : "View More"}
        color="inherit"
        onClick={() => setShowAll(!showAll)}
      />
    </Styled.Container>
  );
};

export default ProjectList;
