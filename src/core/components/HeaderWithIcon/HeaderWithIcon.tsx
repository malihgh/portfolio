import { FC } from "react";
import * as Styled from "./styles";
import shape from "assets/images/news-shapes.png";

type Props = {
  title: string;
  subTitle?: string;
  titleStyle?: object;
};
const HeaderWithIcon: FC<Props> = (props) => {
  const { title, subTitle, titleStyle } = props;

  return (
    <Styled.HeaderContainer>
      <Styled.Title style={titleStyle}>
        {title}
        <Styled.Shape src={shape} />
      </Styled.Title>
      {subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
    </Styled.HeaderContainer>
  );
};

export default HeaderWithIcon;
