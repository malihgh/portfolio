import Footer from "./components/Footer";
import LetsTalk from "./components/LetsTalk";
import * as Styled from "./styles";

const Contact = () => {
  return (
    <Styled.Container parentStyle={{ height: "auto" }}>
      <LetsTalk />
      <Footer />
    </Styled.Container>
  );
};

export default Contact;
