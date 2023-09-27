import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

const profileWidth = 280;
const profileHeight = 400;

export const AboutPhotoContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 740px) {
    display: none; //fix it later
  }
`;

export const Frame = styled.div<MuiEmotion>`
  width: ${profileWidth + "px"};
  height: ${profileHeight + "px"};
  flex-shrink: 0;
  border-radius: ${profileWidth + "px"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BorderFrame = styled.div<MuiEmotion>`
  width: ${profileWidth + "px"};
  height: ${profileHeight + "px"};
  flex-shrink: 0;
  border-radius: ${profileWidth + "px"};
  ${({ theme }) => `
    border: 2px solid ${theme.palette.secondary.main};
  `}
  transform: rotate(20deg);
  position: absolute;
`;

export const Profile = styled.img`
  width: ${profileWidth + "px"};
  height: ${profileHeight + "px"};
  flex-shrink: 0;
  border-radius: ${profileWidth + "px"};
  z-index: 1;
`;

export const StarTop = styled.img`
  width: 75px;
  position: absolute;
  top: 10px;
  right: -5px;
  z-index: 2;
`;

export const StartTopText = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 10.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 13px;

  position: absolute;
  top: 33px;
  right: 3px;
  z-index: 3;

  strong {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const StarBottom = styled.img`
  width: 42px;
  position: absolute;
  left: -4px;
  bottom: 44px;
  z-index: 2;
`;
