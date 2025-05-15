import * as Styled from "./styles";
import Intro from "pages/Home/components/Intro";
import Profile from "./components/Profile";

const Home = () => {
  return (
    <Styled.Container>
      <Styled.Row>
        <Intro />
        <Profile />
      </Styled.Row>
    </Styled.Container>
  );
};

export default Home;
