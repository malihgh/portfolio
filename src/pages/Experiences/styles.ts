import Button from "core/components/Button";
import styled from "styled-components";

export const ExperiencesContainer = styled.div`
  height: 100vh;
  padding: 0px 85px;
  display: flex;

  @media only screen and (max-width: 740px) {
    padding: 0px 55px 20px 55px;
    height: auto;
  }
`;

export const LeftPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const RightPart = styled.div`
  flex: 1;
`;

export const Pointer = styled.img`
  width: 178px;
  height: 235px;
`;

export const CVButton = styled(Button)`
  margin-top: 40px;
`;
