import styled from "@emotion/styled";
import CVButton from "core/components/CVButton";

import { MuiEmotion } from "core/types/MuiEmotion";

interface PageNameType extends MuiEmotion {
  active: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div<MuiEmotion>`
  flex: 1;
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (max-width: 740px) {
    margin-right: 0px;
  }
`;

export const PageContainer = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
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

export const CV = styled(CVButton)`
  @media only screen and (max-width: 740px) {
    margin-left: 0px;
    display: none; //fix it later
  }
`;

export const DarkModeContainer = styled.div`
  flex: 1;
`;

export const DarkModeMakeRight = styled.div`
  float: right;
`;

export const DarkMode = styled.img<MuiEmotion>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
