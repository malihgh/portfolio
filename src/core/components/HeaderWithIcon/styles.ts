import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  font-family: "Poppins-Bold", sans-serif;
  font-size: 44px;
  font-style: normal;
  line-height: 48px;
  margin-top: 30px;
  position: relative;
`;

export const Shape = styled.img`
  width: 50px;
  margin-bottom: 30px;
`;
