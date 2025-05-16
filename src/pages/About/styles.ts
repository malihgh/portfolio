import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/images/about-background.png";
import ScreenContainer from "core/components/ScreenContainer";

export const AboutContainer = styled(ScreenContainer)<MuiEmotion>`
  background-image: ${({ theme }) =>
    theme.palette.mode === "light" && `url(${background})`};
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" && theme.palette.primary.light};
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;
