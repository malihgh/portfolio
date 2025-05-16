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

  @media only screen and (max-width: 740px) {
    padding-top: 60px;
  }
  @media only screen and(min-width: 740px) and (max-width: 1024px) {
    padding-top: 70px;
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1400px) {
    padding-top: 110px;
    padding-bottom: 50px;
  }
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
