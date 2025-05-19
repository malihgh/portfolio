import { FC, ReactNode } from "react";
import { HashLink, HashLinkProps } from "react-router-hash-link";

interface Props extends HashLinkProps {
  children: ReactNode;
}

const Link: FC<Props> = (props) => {
  const { to, children } = props;

  return (
    <HashLink
      smooth
      to={to}
      style={{ textDecoration: "none" }}
      scroll={(el) => {
        const yOffset = -72; // same as header height
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }}
    >
      {children}
    </HashLink>
  );
};

export default Link;
