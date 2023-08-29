import * as Styled from "./styles";
import profile from "assets/Images/profile.png";
import starTop from "assets/Images/star-big-green.png";
import starBottom from "assets/Images/start-samll.png";

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
