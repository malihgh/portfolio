import styled from "@emotion/styled";
import { MuiEmotion } from "core/types/MuiEmotion";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  flex: 1.1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  margin: 0px 5px;
  color: #6c6c6c;
  margin-top: 3px;

  @media (max-width: 740px) {
    display: none;
  }
`;

export const Text = styled.div<MuiEmotion>`
  /* color: ${({ theme }) => theme.palette.text.primary}; fix it*/
  color: #6c6c6c;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const Line = styled.div`
  border-bottom: 1px solid #6c6c6c;
  margin: 20px 0px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 740px) {
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;
