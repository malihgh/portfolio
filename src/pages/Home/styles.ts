import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/Images/home-background.png";

export const Container = styled.div<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  background-color: rgba(47, 191, 191, 14%);
  height: 100vh;
  background-image: url(${background});
  background-size: contain; //cover
  background-repeat: no-repeat;
  padding: 40px 85px;

  @media only screen and (max-width: 740px) {
    padding: 15px 15px;
  }
`;
