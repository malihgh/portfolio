import { FC } from "react";
import * as Styled from "./styles";
import { ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  title: string;
  color?: "primary" | "secondary";
}

const Button: FC<Props> = (props) => {
  const { title } = props;

  return (
    <Styled.ButtonContainer>
      <Styled.FilledButton {...props}>{title}</Styled.FilledButton>
    </Styled.ButtonContainer>
  );
};

export default Button;
