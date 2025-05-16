import styled from "@emotion/styled";
import ScreenContainer from "core/components/ScreenContainer";

export const ExperiencesContainer = styled(ScreenContainer)`
  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media only screen and (max-width: 740px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
