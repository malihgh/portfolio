import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MuiEmotion } from "core/types/MuiEmotion";

export const InfoContainer = styled.div<MuiEmotion>`
  position: relative;
  margin-top: 100px;
  flex: 5;
`;

export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: "Poppins-Bold", sans-serif;
  font-size: 50px;
  font-style: normal;
  line-height: 64px;
`;

export const Description = styled.div<MuiEmotion>`
  /* color: ${({ theme }) => theme.palette.text.primary}; //color: #585C5C; */
  color: #585c5c;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-top: 20px;
`;

export const StartedButton = styled(Button)<MuiEmotion>`
  display: flex;
  padding: 13px 0px;
  min-width: 150px;
  border-radius: 38px;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 55px;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Shape = styled.img<MuiEmotion>`
  width: 120px;
  position: absolute;
  top: -70px;
  right: 20px;
`;

export const Pointer = styled.img`
  width: 120px;
  position: absolute;
  bottom: -30px;
  right: 0;
`;
