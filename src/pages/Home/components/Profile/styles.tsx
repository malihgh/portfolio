import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const ProfileContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Frame = styled.div<MuiEmotion>`
  width: 280px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 280px;
  margin: 30px 0 0 30px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
