import { FC } from "react";
import * as Styled from "./styles";
import { ProjectsItemType } from "pages/Projects/data/ProjectsData";
import kitchenaid from "assets/images/projects/kitchenaid.png";
import pokemon from "assets/images/projects/pokemon.png";
import practicaMente from "assets/images/projects/practica-mente.png";
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
  const { id, title, description, isApp = false, url } = props;

  //same order as the data in ProjectsData.ts
  const images = [
    kitchenaid,
    pokemon,
    practicaMente,
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

  const openUrl = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <Styled.Card hasUrl={!!url} onClick={openUrl}>
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
