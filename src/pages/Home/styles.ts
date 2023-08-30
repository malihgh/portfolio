import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/Images/home-background.png";

export const Container = styled.div<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.light};
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
`;
