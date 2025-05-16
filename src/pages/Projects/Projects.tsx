import * as Styled from "./styles";
import HeaderWithIcon from "core/components/HeaderWithIcon";
import excited from "assets/images/excited-shape-black.svg";
import ProjectList from "./components/ProjectList";

const Projects = () => {
  return (
    <Styled.ProjectsContainer>
      <Styled.TitleContainer>
        <HeaderWithIcon
          title="Projects"
          subTitle="Explore a showcase of both personal passion projects and client collaborations that I've brought to life."
          titleStyle={{
            margin: "auto",
          }}
          subTitleStyle={{
            width: "80%",
          }}
        />
        <Styled.Shape src={excited} />
      </Styled.TitleContainer>

      <ProjectList />
    </Styled.ProjectsContainer>
  );
};

export default Projects;
