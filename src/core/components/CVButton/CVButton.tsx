import { FC } from "react";
import { ButtonProps } from "@mui/material";
import Button from "core/components/Button";

const CVButton: FC<ButtonProps> = (props) => {
  const openURL = () => {
    const url =
      "https://drive.google.com/file/d/1J94SCHMsKeu4oFiA3cyS_LotEQBJd5O4/view";
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Button
      title="Download CV"
      onClick={() => openURL()}
      {...props}
      color="primary"
    />
  );
};

export default CVButton;
