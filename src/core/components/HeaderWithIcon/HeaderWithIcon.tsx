import { FC } from "react";
import * as Styled from "./styles";
import shape from "assets/images/news-shapes.png";

type Props = {
  title: string;
  subTitle?: string;
};
const HeaderWithIcon: FC<Props> = (props) => {
  const { title, subTitle } = props;

  return (
    <Styled.HeaderContainer>
      <Styled.Title>
        {title}
        <Styled.Shape src={shape} />
      </Styled.Title>
      <Styled.SubTitle>{subTitle}</Styled.SubTitle>
    </Styled.HeaderContainer>
  );
};

export default HeaderWithIcon;
