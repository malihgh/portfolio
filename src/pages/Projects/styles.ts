import styled from "@emotion/styled";
import ScreenContainer from "core/components/ScreenContainer";

export const ProjectsContainer = styled(ScreenContainer)`
  background-color: #fffcf3;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Shape = styled.img`
  width: 130px;
  height: 110px;
  rotate: 6deg;

  position: absolute;
  top: 0px;
  right: -10px;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;
