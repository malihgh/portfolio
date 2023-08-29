import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const SkillContainer = styled.div<MuiEmotion>`
  //padding add to theme
  padding: 20px 85px;
  padding-bottom: 80px;
`;

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
  top: -10px;
  left: 10px;
`;

export const Shape = styled.img`
  width: 50px;
  margin-bottom: 30px;
`;
