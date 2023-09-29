import { FC } from "react";
import * as Styled from "./styles";

type ScreenContainerProps = {
  children: React.ReactNode;
};

const ScreenContainer: FC<ScreenContainerProps> = ({ children, ...props }) => {
  return (
    <Styled.Container {...props}>
      <Styled.Padding>{children}</Styled.Padding>
    </Styled.Container>
  );
};

export default ScreenContainer;
