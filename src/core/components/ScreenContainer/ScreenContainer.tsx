import { FC } from "react";
import * as Styled from "./styles";

type ScreenContainerProps = {
  children: React.ReactNode;
  parentStyle?: object;
};

const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  parentStyle,
  ...props
}) => {
  return (
    <Styled.Container style={parentStyle}>
      <Styled.Padding {...props}>{children}</Styled.Padding>
    </Styled.Container>
  );
};

export default ScreenContainer;
