import { FC } from "react";
import * as Styled from "./styles";
import shape from "assets/images/news-shapes.png";

type Props = {
  title: string;
};
const HeaderWithIcon: FC<Props> = (props) => {
  const { title } = props;

  return (
    <Styled.Title>
      {title}
      <Styled.Shape src={shape} />
    </Styled.Title>
  );
};

export default HeaderWithIcon;
