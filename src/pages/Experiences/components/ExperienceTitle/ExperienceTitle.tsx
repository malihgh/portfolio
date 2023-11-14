import * as Styled from "./styles";
import HeaderWithIcon from "core/components/HeaderWithIcon";
import Pointer from "assets/images/pointer-long-yellow.svg";

const ExperienceTitle = () => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <HeaderWithIcon
          title="My Experience"
          subTitle="I had the pleasure to work with companies across a variety of industries. I'm always interested in new, exciting and challenging adventures."
          titleStyle={{
            textAlign: "left",
            paddingLeft: 0,
            fontSize: 38,
          }}
          subTitleStyle={{
            textAlign: "left",
            marginLeft: 0,
            width: "100%",
          }}
        />
        <Styled.CV />
      </Styled.HeaderContainer>

      <Styled.Pointer src={Pointer} />
    </Styled.Container>
  );
};

export default ExperienceTitle;
