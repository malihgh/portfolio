import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MuiEmotion } from "core/types/MuiEmotion";

export const IntroContainer = styled.div`
  position: relative;
  margin-top: 110px;
  flex: 5;

  @media only screen and (max-width: 740px) {
    margin-top: 50px;
  }
`;

export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: "Poppins-Bold", sans-serif;
  font-size: 50px;
  font-style: normal;
  line-height: 64px;
`;

export const Description = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
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

export const Shape = styled.img`
  width: 120px;
  position: absolute;
  top: -70px;
  right: 20px;

  @media only screen and (max-width: 740px) {
    top: -40px;
    right: 0px;
  }
`;

export const Pointer = styled.img`
  width: 120px;
  position: absolute;
  bottom: -30px;
  right: 0;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;
