import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const SkillContainer = styled.div<MuiEmotion>`
  //padding add to theme
  height: 100vh;
  padding: 0px 85px;
  position: relative;

  @media only screen and (max-width: 740px) {
    padding: 0px 55px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

export const Star = styled.img`
  width: 50px;
  position: absolute;
  top: 50px;
  left: 100px;

  @media only screen and (max-width: 740px) {
    top: 15px;
    left: 20px;
  }
`;
