import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const IntroContainer = styled.div`
  position: relative;
  flex: 5;

  @media only screen and (max-width: 740px) {
    margin-top: 90px;
  }
`;

export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: "Poppins-Bold", sans-serif;
  font-size: 49.5px;
  font-style: normal;
  line-height: 64px;

  @media only screen and (max-width: 740px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Description = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-top: 40px;
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

  @media only screen and (max-width: 1024px) {
    top: -30px;
    right: 0px;
  }
`;

export const Pointer = styled.img`
  width: 120px;
  position: absolute;
  bottom: -30px;
  right: 0;
`;
