import * as Styled from "./styles";
import HeaderWithIcon from "core/components/HeaderWithIcon";
import Pointer from "assets/images/pointer-long-yellow.png";

const Experiences = () => {
  return (
    <Styled.ExperiencesContainer>
      <Styled.Row>
        <Styled.LeftPart>
          <div>
            <HeaderWithIcon
              title="My Experience"
              subTitle="I have had the pleasure to work with companies across a variety of industries. I'm always interested in new, exciting and challenging adventures."
              titleStyle={{
                textAlign: "left",
                paddingLeft: 0,
              }}
              subTitleStyle={{
                textAlign: "left",
                marginLeft: 0,
                marginBottom: "30px",
              }}
            />
            <Styled.CVButton title="Download CV" />
          </div>

          <Styled.Pointer src={Pointer} />
        </Styled.LeftPart>
        <Styled.RightPart>right</Styled.RightPart>
      </Styled.Row>
    </Styled.ExperiencesContainer>
  );
};

export default Experiences;
