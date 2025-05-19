import styled from "@emotion/styled";
import Button from "core/components/Button";

export const Container = styled.div`
  margin-top: 20px;
`;

export const ContainerGPT = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MoreButton = styled(Button)`
  margin: auto;
  margin-top: 15px;
`;
