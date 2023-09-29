import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/images/home-background.png";
import ScreenContainer from "core/components/ScreenContainer";

export const Container = styled(ScreenContainer)<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.light};
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
