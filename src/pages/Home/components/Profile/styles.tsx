import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

const profileWidth = 280;
const profileHeight = 400;

export const ProfileContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 740px) {
    display: none; //fix it later
  }
`;

export const Frame = styled.div<MuiEmotion>`
  width: ${profileWidth + 20 + "px"};
  height: ${profileHeight + 20 + "px"};
  flex-shrink: 0;
  border-radius: ${profileWidth + "px"};
  margin: 30px 0 0 30px;
  ${({ theme }) => `
    border: 2px solid ${theme.palette.text.secondary};
  `}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.img`
  width: ${profileWidth + "px"};
  height: ${profileHeight + "px"};
  flex-shrink: 0;
  border-radius: ${profileWidth + "px"};
`;

export const StarTop = styled.img`
  width: 75px;
  position: absolute;
  top: 30px;
  right: 17px;
`;

export const StarBottom = styled.img`
  width: 30px;
  position: absolute;
  left: 50px;
  bottom: 44px;
`;

export const Circle = styled.div<MuiEmotion>`
  width: 10px;
  height: 10px;
  ${({ theme }) => `
    border: 1px solid ${theme.palette.secondary.main};
  `}
  border-radius: 50%;
  position: absolute;
  right: 19px;
  bottom: 70px;
`;
