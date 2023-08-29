import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const SkillContainer = styled.div<MuiEmotion>`
  //padding add to theme
  padding: 30px 85px;
  padding-bottom: 80px;
  position: relative;
`;

export const SubTitle = styled.div`
  color: #6c6c6c; //fix
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  width: 60%;
  margin: auto;
  margin-top: 17px;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Star = styled.img`
  width: 50px;
  position: absolute;
  top: 50px;
  left: 100px;
`;
