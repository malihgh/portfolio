import styled from "@emotion/styled";
import ScreenContainer from "core/components/ScreenContainer";

export const ProjectsContainer = styled(ScreenContainer)`
  position: relative;
  background-color: #fffcf3;
`;

export const Shape = styled.img`
  width: 150px;
  rotate: 6deg;
  position: absolute;
  top: 70px;
  right: 80px;

  @media only screen and (max-width: 740px) {
    top: -40px;
    right: 0px;
  }
`;
