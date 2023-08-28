import Header from "pages/Home/components/Header";
import * as Styled from "./styles";
import Info from "pages/Home/components/Info/Info";

const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <Styled.Row>
        <Info />
        <Styled.Pic>pic</Styled.Pic>
      </Styled.Row>
    </Styled.Container>
  );
};

export default Home;
