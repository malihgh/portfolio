import * as Styled from "./styles";
import Linkedin from "assets/images/in.svg";
import github from "assets/images/github.svg";
import gitlab from "assets/images/gitlab.svg";
import CustomHref from "core/components/CustomHref";

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
    <div>
      {buttons.map((button) => (
        <CustomHref
          key={button.id}
          to={button.link}
          style={{ marginRight: 10 }}
        >
          <Styled.Icon src={button.icon} />
        </CustomHref>
      ))}
    </div>
  );
};

export default SocialLinks;
