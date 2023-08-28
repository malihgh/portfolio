import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/Images/home-background.png";

export const Container = styled.div<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 100vh;
  opacity: 14%;
  background-image: url(${background});
  background-size: contain; //cover
  background-repeat: no-repeat;
`;
