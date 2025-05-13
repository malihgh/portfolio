import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 740px) {
    padding: 20px;
  }
`;
export const HeaderAndInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  flex: 1.1;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }
`;

export const Divider = styled.div<MuiEmotion>`
  margin: 0px 5px;
  color: ${({ theme }) => theme.palette.info.main};
  margin-top: 3px;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

export const Text = styled.div<MuiEmotion>`
  color: ${({ theme }) => theme.palette.info.main};
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const Line = styled.div<MuiEmotion>`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.info.main}`};

  margin: 20px 0px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
  }
`;
