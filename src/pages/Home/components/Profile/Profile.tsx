import * as Styled from "./styles";
import profile from "assets/images/profile.png";
import starTop from "assets/images/star-big-green.svg";
import starBottom from "assets/images/star-small.svg";

const Profile = () => {
  return (
    <Styled.ProfileContainer>
      <Styled.StarTop src={starTop} />
      <Styled.StarBottom src={starBottom} />
      <Styled.Circle />
      <Styled.Frame>
        <Styled.Profile src={profile} />
      </Styled.Frame>
    </Styled.ProfileContainer>
  );
};

export default Profile;
