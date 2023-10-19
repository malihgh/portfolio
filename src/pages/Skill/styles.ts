import styled from "@emotion/styled";
import ScreenContainer from "core/components/ScreenContainer";

export const SkillContainer = styled(ScreenContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-top: 60px;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Star = styled.img`
  width: 50px;
  position: absolute;
  top: 70px;
  left: 120px;

  @media only screen and (max-width: 740px) {
    top: 35px;
    left: 50px;
  }
`;
