import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MuiEmotion } from "core/types/MuiEmotion";

export const ButtonContainer = styled.div<MuiEmotion>``;

export const FilledButton = styled(Button)<MuiEmotion>`
  display: flex;
  padding: 13px 0px;
  min-width: 150px;
  border-radius: 38px;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.secondary};

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
