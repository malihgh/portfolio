import { MuiEmotion } from "core/types/MuiEmotion";
import styled from "@emotion/styled";

interface CircleColorType extends MuiEmotion {
  isPrimary: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Duration = styled.div<MuiEmotion>`
  flex: 1;
  margin-top: -5px; //for aligning with the circle
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: right;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
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
  margin: 0 15px;

  @media only screen and (max-width: 740px) {
    margin: 0 15px;
  }
`;

export const Line = styled.div<MuiEmotion>`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.info.main};
  opacity: 0.4;
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
  padding-bottom: 20px;
`;

export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 7px;
`;

export const Description = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  font-family: "Poppins", sans-serif;
  font-size: 13px;
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
