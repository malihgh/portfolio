import { FC } from "react";
import { ButtonProps } from "@mui/material";
import Button from "core/components/Button";
import { Link } from "react-router-dom";

const CVButton: FC<ButtonProps> = (props) => {
  const url =
    "https://drive.google.com/file/d/1J94SCHMsKeu4oFiA3cyS_LotEQBJd5O4/view";

  return (
    <Link target="_blank" to={url} style={{ textDecoration: "none" }}>
      <Button title="Download CV" {...props} color="primary" />
    </Link>
  );
};

export default CVButton;
