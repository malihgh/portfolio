import * as Styled from "./styles";

const NotFound = () => {
  return (
    <Styled.Container>
      <Styled.Number>404</Styled.Number>
      <Styled.Title>Oops!</Styled.Title>
      <Styled.Message>
        Looks like the page you are trying to access does not exist!
      </Styled.Message>
      <Styled.BackButton title="Back to main page" href="/" color="secondary" />
    </Styled.Container>
  );
};

export default NotFound;
