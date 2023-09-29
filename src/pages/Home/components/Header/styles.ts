import styled from "@emotion/styled";
import Button from "core/components/Button";

import { MuiEmotion } from "core/types/MuiEmotion";

interface PageNameType extends MuiEmotion {
  active: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
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
  @media only screen and (max-width: 1024px) {
    display: none; //fix it later
  }
`;

export const CVButton = styled(Button)`
  margin-left: 55px;

  @media only screen and (max-width: 740px) {
    margin-left: 0px;
  }
`;
