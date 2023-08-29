import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const SkillContainer = styled.div<MuiEmotion>`
  //padding add to theme
  padding: 30px 85px;
  padding-bottom: 80px;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

export const Star = styled.img`
  width: 50px;
  position: absolute;
  top: 50px;
  left: 100px;
`;
