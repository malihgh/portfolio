import { MuiEmotion } from "core/types/MuiEmotion";
import styled from "@emotion/styled";

interface CircleColorType extends MuiEmotion {
  isPrimary: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Duration = styled.div`
  flex: 1;
  margin-top: -5px; //for aligning with the circle
  color: #303535;
  text-align: right;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;

  @media only screen and (max-width: 740px) {
    text-align: left;
  }
`;

export const SectionLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 25px;

  @media only screen and (max-width: 740px) {
    margin: 0 15px;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d0d0d0;
`;

export const Circle = styled.div<CircleColorType>`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.palette.primary.main : theme.palette.secondary.main};
  z-index: 1;
`;

export const DescriptionContainer = styled.div`
  flex: 3;
  margin-top: -5px; //for aligning with the circle
  padding-bottom: 30px;
`;

export const Title = styled.div`
  color: #303535;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  color: #6c6c6c;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 100;
  line-height: 26px;
  text-align: justify;

  strong {
    font-weight: 700;
    filter: brightness(70%);
  }

  @media only screen and (max-width: 740px) {
    text-align: left;
  }
`;
