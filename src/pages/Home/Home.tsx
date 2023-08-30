import * as Styled from "./styles";
import Header from "pages/Home/components/Header";
import Intro from "pages/Home/components/Intro";
import Profile from "./components/Profile";

const Home = () => {
  return (
    <Styled.Container>
      <Header />

      <Styled.Row>
        <Intro />
        <Profile />
      </Styled.Row>
    </Styled.Container>
  );
};

export default Home;
