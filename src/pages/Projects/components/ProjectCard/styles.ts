import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Card = styled.div<{ hasUrl: boolean }>`
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3px 10px;
  cursor: ${({ hasUrl }) => hasUrl && "pointer"};
`;

export const ImageFrame = styled.div`
  background-color: #edf0ee;
  width: 100%;
  max-width: 400px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img<{ isApp: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ isApp }) => isApp && "contain"};
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 60px; //to not change the size of the card
`;

export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

export const Description = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
