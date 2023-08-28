import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MuiEmotion } from "core/types/MuiEmotion";

interface PageNameType extends MuiEmotion {
  active: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 55px;
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PageName = styled.div<PageNameType>`
  color: ${({ theme, active }) =>
    active ? theme.palette.secondary.main : theme.palette.text.primary};
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media only screen and (max-width: 740px) {
    display: none; //fix it later
  }
`;

export const CV = styled(Button)<MuiEmotion>`
  display: flex;
  padding: 13px 0px;
  min-width: 150px;
  border-radius: 38px;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-left: 55px;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
