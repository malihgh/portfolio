import styled from "@emotion/styled";
import ScreenContainer from "core/components/ScreenContainer";
import { MuiEmotion } from "core/types/MuiEmotion";

export const ProjectsContainer = styled(ScreenContainer)<MuiEmotion>`
  background-color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#fffcf3" : theme.palette.primary.light};
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
