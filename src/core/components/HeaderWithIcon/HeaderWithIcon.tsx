import { FC } from "react";
import * as Styled from "./styles";
import shape from "assets/images/news-shapes.png";

type Props = {
  title: string;
  subTitle?: string;
  titleStyle?: object;
  subTitleStyle?: object;
};
const HeaderWithIcon: FC<Props> = (props) => {
  const { title, subTitle, titleStyle, subTitleStyle } = props;

  return (
    <Styled.HeaderContainer>
      <Styled.TitleContainer>
        <Styled.Title style={titleStyle}>
          {title}
          <Styled.Shape src={shape} />
        </Styled.Title>
      </Styled.TitleContainer>
      {subTitle && (
        <Styled.SubTitle style={subTitleStyle}>{subTitle}</Styled.SubTitle>
      )}
    </Styled.HeaderContainer>
  );
};

export default HeaderWithIcon;
