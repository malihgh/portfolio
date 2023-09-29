import styled from "@emotion/styled";
import ScreenContainer from "core/components/ScreenContainer";

export const SkillContainer = styled(ScreenContainer)`
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-top: 50px;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Star = styled.img`
  width: 50px;
  position: absolute;
  top: 50px;
  left: 100px;

  @media only screen and (max-width: 740px) {
    top: 15px;
    left: 20px;
  }
`;
