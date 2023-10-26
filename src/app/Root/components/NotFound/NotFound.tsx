import * as Styled from "./styles";
import Spotlight from "../Spotlight";

const NotFound = () => {
  return (
    <Styled.App>
      <Styled.Container>
        <Styled.Number>404</Styled.Number>
        <Styled.Title>Oops!</Styled.Title>
        <Styled.Message>
          Looks like the page you are trying to access does not exist!
        </Styled.Message>
        <Styled.BackButton
          title="Back to main page"
          href="/"
          color="secondary"
        />

        <Spotlight />
      </Styled.Container>
    </Styled.App>
  );
};

export default NotFound;
