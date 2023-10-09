import styled from "@emotion/styled";
import Button from "core/components/Button";

export const Container = styled.div`
  flex: 1;
  padding-bottom: 30px;
`;

export const HeaderContainer = styled.div`
  width: 350px;

  @media only screen and (max-width: 740px) {
    width: auto;
  }
`;
export const Pointer = styled.img`
  width: 178px;
  height: 235px;
  padding-top: 60px;
  padding-left: 60px;
`;

export const CVButton = styled(Button)`
  margin-top: 30px;
`;
