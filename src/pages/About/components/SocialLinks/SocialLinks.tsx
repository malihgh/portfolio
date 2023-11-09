import * as Styled from "./styles";
import Linkedin from "assets/images/in.svg";
import github from "assets/images/github.svg";
import gitlab from "assets/images/gitlab.svg";
import telegram from "assets/images/telegram.svg";
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
  {
    id: 3,
    icon: telegram,
    link: "https://t.me/MaliheGhasemian",
  },
];
const SocialLinks = () => {
  return (
    <div>
      {buttons.map((button) => (
        <Link
          key={button.id}
          target="_blank"
          to={button.link}
          style={{ textDecoration: "none", marginRight: 10 }}
        >
          <Styled.Icon src={button.icon} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
