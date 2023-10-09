import HeaderWithIcon from "core/components/HeaderWithIcon";
import excited from "assets/images/excited-shape-black.png";

import * as Styled from "./styles";

const Projects = () => {
  return (
    <Styled.ProjectsContainer>
      <HeaderWithIcon
        title="Projects"
        subTitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
        titleStyle={{
          margin: "auto",
        }}
      />
      <Styled.Shape src={excited} />
    </Styled.ProjectsContainer>
  );
};

export default Projects;
