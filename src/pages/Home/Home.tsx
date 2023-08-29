import Header from "pages/Home/components/Header";
import * as Styled from "./styles";
import Info from "pages/Home/components/Intro/Intro";
import Profile from "./components/Profile/Profile";

const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <Styled.Row>
        <Info />
        <Profile />
      </Styled.Row>
    </Styled.Container>
  );
};

export default Home;
