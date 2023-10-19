import * as Styled from "./styles";
import HeaderWithIcon from "core/components/HeaderWithIcon";
import excited from "assets/images/excited-shape-black.png";
import ProjectList from "./components/ProjectList";

const Projects = () => {
  return (
    <Styled.ProjectsContainer parentStyle={{ height: "auto" }}>
      <Styled.TitleContainer>
        <HeaderWithIcon
          title="Projects"
          subTitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
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
