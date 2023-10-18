import styled from "@emotion/styled";
import Button from "core/components/Button";
import { MuiEmotion } from "core/types/MuiEmotion";

interface CardContainerProps extends MuiEmotion {
  rows: number;
}

export const Container = styled.div`
  margin-top: 20px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const CardContainer = styled.div<CardContainerProps>`
  width: ${({ rows }) => 100 / rows}%;
`;

export const MoreButton = styled(Button)`
  margin: auto;
  margin-top: 15px;
`;
