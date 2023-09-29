import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/images/about-background.png";
import ScreenContainer from "core/components/ScreenContainer";

export const AboutContainer = styled(ScreenContainer)<MuiEmotion>`
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`;
