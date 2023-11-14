import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

interface CustomHrefProps extends LinkProps {
  children: React.ReactNode;
}

const CustomHref: FC<CustomHrefProps> = (props) => {
  const { children } = props;
  return (
    <Link target="_blank" style={{ textDecoration: "none" }} {...props}>
      {children}
    </Link>
  );
};

export default CustomHref;
