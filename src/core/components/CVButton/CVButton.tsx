import { FC } from "react";
import { ButtonProps } from "@mui/material";
import Button from "core/components/Button";

const CVButton: FC<ButtonProps> = (props) => {
  const url =
    "https://drive.google.com/file/d/1J94SCHMsKeu4oFiA3cyS_LotEQBJd5O4/view";

  return (
    <Button
      title="Download CV"
      href={url}
      {...props}
      color="primary"
      variant="outlined"
    />
  );
};

export default CVButton;
