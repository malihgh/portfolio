import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MuiEmotion } from "core/types/MuiEmotion";

interface FilledButtonType extends MuiEmotion {
  color?: "primary" | "secondary" | "inherit";
}

export const ButtonContainer = styled.div<MuiEmotion>``;

export const FilledButton = styled(Button)<FilledButtonType>`
  display: flex;
  padding: 13px 0px;
  min-width: 150px;
  border-radius: 38px;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;

  background-color: ${({ theme, color }) =>
    color === "primary"
      ? theme.palette.primary.main
      : color === "secondary"
      ? theme.palette.secondary.main
      : "transparent"};

  color: ${({ theme, color }) =>
    color === "inherit"
      ? theme.palette.text.primary
      : theme.palette.text.secondary};

  border: ${({ theme, color }) =>
    color === "inherit" ? `1px solid ${theme.palette.text.primary}` : "none"};

  :hover {
    background-color: ${({ theme, color }) =>
      color === "primary"
        ? theme.palette.primary.main
        : color === "secondary"
        ? theme.palette.secondary.main
        : "transparent"};
  }
`;
