import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Container = styled.div`
  flex: 1;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Title = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  font-family: "Poppins-Bold", sans-serif;
  font-size: 32px;
  font-style: normal;
  line-height: 48px;
  margin-bottom: 20px;
`;

export const KeyExpertise = styled.div<MuiEmotion>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.primary.light};
  margin-bottom: 10px;
`;

export const Arrow = styled.img`
  width: 25px;
  margin-right: 12px;
`;

export const Text = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;

  strong {
    font-weight: 600;
  }
`;
