import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const AboutIntroContainer = styled.div`
  position: relative;
  flex: 5;
  padding-left: 50px;

  @media only screen and (max-width: 740px) {
    padding-left: 0px;
  }
`;

export const Description = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  line-height: 25px;
  text-align: justify;

  strong {
    font-weight: 700;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media only screen and (max-width: 740px) {
    margin-top: 20px;
  }
`;

export const Line = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  margin-top: -8px;

  //to not add scrollbar in chrome
  @media only screen and (max-width: 830px) {
    display: none;
  }
`;

export const Text = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 4px;

  //600px bsc it should be the same in ipad size
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Star = styled.img`
  width: 50px;
  position: absolute;
  top: -30px;
  right: 80px;

  @media only screen and (max-width: 740px) {
    top: -40px;
    right: 0px;
  }
`;
