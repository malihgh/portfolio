import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";
import background from "assets/images/home-background.png";
import ScreenContainer from "core/components/ScreenContainer";

export const Container = styled(ScreenContainer)<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.light};
  background-image: ${({ theme }) =>
    theme.palette.mode === "light"
      ? `url(${background})`
      : theme.palette.background.default};
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  padding-top: 120px;
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
