import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

const profileWidth = 280;
const profileHeight = 400;

export const ProfileContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 740px) {
    display: none; //fix it later
  }
`;

export const Frame = styled.div<MuiEmotion>`
  width: ${profileWidth + 20 + "px"};
  height: ${profileHeight + 20 + "px"};
  flex-shrink: 0;
  border-radius: 280px;
  margin: 30px 0 0 30px;
  /* border: ${({ theme }) => `2xp solid ${theme.palette.secondary.main}`}; */
  border: 2px solid white; //fix it
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.img<MuiEmotion>`
  width: ${profileWidth + "px"};
  height: ${profileHeight + "px"};
  flex-shrink: 0;
  border-radius: 280px;
`;
