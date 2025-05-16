import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Container = styled.div<MuiEmotion>`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.default};
  height: "auto";
  margin: 0 auto;
  @media only screen and (max-width: 740px) {
    height: auto;
  }
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const Padding = styled.div`
  flex: 1;
  padding: 60px 85px;

  @media only screen and (max-width: 740px) {
    padding: 20px 20px;
  }
  @media only screen and (max-width: 1024px) {
    //padding: 20px 55px;
  }
`;
