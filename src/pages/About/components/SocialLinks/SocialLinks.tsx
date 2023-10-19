import * as Styled from "./styles";
import Linkedin from "assets/images/in.png";
import github from "assets/images/github.png";
import gitlab from "assets/images/gitlab.png";
import { Link } from "react-router-dom";

const buttons = [
  {
    id: 0,
    icon: Linkedin,
    link: "https://www.linkedin.com/in/maliheh-ghasemian-2a04391a5/",
  },
  {
    id: 1,
    icon: github,
    link: "https://github.com/malihgh",
  },
  {
    id: 2,
    icon: gitlab,
    link: "https://gitlab.com/malihgh",
  },
];
const SocialLinks = () => {
  return (
    <>
      {buttons.map((button) => (
        <Link
          key={button.id}
          target="_blank"
          to={button.link}
          style={{ textDecoration: "none" }}
        >
          <Styled.Icon src={button.icon} />
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;
