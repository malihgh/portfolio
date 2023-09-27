import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/images/about-background.png";

export const AboutContainer = styled.div<MuiEmotion>`
  height: 100vh;
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 0px 85px;

  @media only screen and (max-width: 740px) {
    padding: 0px 55px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`;
