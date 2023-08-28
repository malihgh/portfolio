import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Container = styled.div<MuiEmotion>`
  color: #303535;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 69px;
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
