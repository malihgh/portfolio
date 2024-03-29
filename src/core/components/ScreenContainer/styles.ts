import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Container = styled.div<MuiEmotion>`
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.default};

  @media only screen and (max-width: 740px) {
    height: auto;
  }
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const Padding = styled.div`
  flex: 1;
  padding: 30px 85px;

  @media only screen and (max-width: 740px) {
    padding: 20px 55px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 20px 55px;
  }
`;
