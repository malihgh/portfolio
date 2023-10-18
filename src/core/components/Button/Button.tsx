import { FC } from "react";
import * as Styled from "./styles";
import { ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  title: string;
  color?: "primary" | "secondary" | "inherit";
}

const Button: FC<Props> = (props) => {
  const { title, color = "primary" } = props;

  return (
    <Styled.ButtonContainer>
      <Styled.FilledButton {...props} color={color}>
        {title}
      </Styled.FilledButton>
    </Styled.ButtonContainer>
  );
};

export default Button;
