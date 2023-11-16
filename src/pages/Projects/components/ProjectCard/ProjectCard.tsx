import { FC } from "react";
import * as Styled from "./styles";
import { ProjectsItemType } from "pages/Projects/data/ProjectsData";
import gespos from "assets/images/projects/gespos.jpeg";
import swissforages from "assets/images/projects/swissforages.png";
import mixOrMatch from "assets/images/projects/mix-or-match.png";
import connectedHomeCare from "assets/images/projects/connect-home-care.png";
import cockpit from "assets/images/projects/cockpit.jpg";
import goFleet from "assets/images/projects/go-fleet.png";
import autoTik from "assets/images/projects/autotik.png";
import limoRestaurant from "assets/images/projects/limo-restaurant.png";
import asena from "assets/images/projects/asena.png";

const ProjectCard: FC<ProjectsItemType> = (props) => {
  const { id, title, description, isApp } = props;

  //same order as the data in ProjectsData.ts
  const images = [
    gespos,
    swissforages,
    mixOrMatch,
    connectedHomeCare,
    cockpit,
    goFleet,
    autoTik,
    limoRestaurant,
    asena,
  ];
  return (
    <Styled.Card>
      <Styled.ImageFrame>
        <Styled.Image src={images[id]} alt="images" isApp={isApp} />
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
