import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Container = styled.div<MuiEmotion>`
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 100vh;
`;
