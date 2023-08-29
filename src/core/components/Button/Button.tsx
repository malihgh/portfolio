import { FC } from "react";
import * as Styled from "./styles";

type Props = {
  title: string;
};

const Button: FC<Props> = (props) => {
  const { title } = props;
  return (
    <Styled.ButtonContainer>
      <Styled.FilledButton>{title}</Styled.FilledButton>
    </Styled.ButtonContainer>
  );
};

export default Button;
