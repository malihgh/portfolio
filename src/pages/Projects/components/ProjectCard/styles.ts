import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Card = styled.div`
  margin-top: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 10px;
`;

export const ImageFrame = styled.div`
  background-color: #edf0ee;
  width: 100%;
  height: 225px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
`;

export const Image = styled.img<{ isApp: boolean }>`
  width: 100%;
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
