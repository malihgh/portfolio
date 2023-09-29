import styled from "styled-components";
import Button from "core/components/Button";
import ScreenContainer from "core/components/ScreenContainer";

export const ExperiencesContainer = styled(ScreenContainer)``;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
export const LeftPart = styled.div`
  flex: 1;
`;

export const RightPart = styled.div`
  flex: 1;
`;

export const Pointer = styled.img`
  width: 178px;
  height: 235px;
  padding-top: 90px;
  padding-left: 60px;
`;

export const CVButton = styled(Button)`
  //style dosen't work!!!-> add margin to subtitle above button
`;
